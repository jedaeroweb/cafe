
function display_gender(gender)
{
    if(gender==null) {
        return '미입력';
    }

    if (gender==1) {
        return '남자';
    } else {
        return '여자';
    }
}

function setDateInput(obj) {
    if (obj != undefined) {
        var datediff = -(parseInt(obj));
        var newDate = new Date();
        var now = new Date();
        newDate.setDate(now.getDate()+datediff);
        var newYear = newDate.getFullYear();
        var newMonth = newDate.getMonth()+1;
        if (newMonth.toString().length == 1) newMonth = "0" + newMonth;

        endMonth=now.getMonth() +1;
        if (endMonth.toString().length == 1) endMonth = "0" + endMonth;

        var newDay = newDate.getDate();
        if (newDay.toString().length == 1) { newDay = "0" + newDay};

        var txtSDate = newYear + "-" + newMonth +'-'+ newDay;
        endDay=now.getDate();

        if (endDay.toString().length == 1) {endDay = "0" + endDay; };
        var txtEDate = now.getFullYear() + '-' + endMonth + "-" + endDay;

        $('input[name="start_date"]').val(txtSDate).effect("highlight");
        $('input[name="end_date"]').val(txtEDate).effect("highlight");
    } else {alert("잠시 후 이용해 주시기 바랍니다."); return false;}
}

function stripComma(str) {
    var re = /,/g;
    return str.replace(re, "");
}

function add_hyphen(v) {
    if( !v ){
        return v;
    }

    v = v.replace(/[^0-9]/g, '');
    return v.replace(/^(0(?:2|[0-9]{2}))([0-9]+)([0-9]{4}$)/, "$1-$2-$3");
}

function initPagination(num_entries, items_per_page, current_page) {
    if(!current_page) {
        var current_page=0;
    }

    if(num_entries<=items_per_page) {
        return false;
    }

    $(".sl_pagination").pagination(num_entries, {
        current_page : current_page,
        num_edge_entries : 2,
        num_display_entries : 8,
        callback : pageselectCallback,
        items_per_page : items_per_page
    });
    return false;
}

function pageselectCallback(page_index, jq) {
    if ($(jq).data("load") == true)
        getList(page_index, jq);
    else
        $(jq).data("load", true);

    return false;
}


var current_page=0;

function getList(current_page, jq) {
    if(!current_page)
        current_page = 0;

    var perPage =10;
    var pageID=current_page+1;

    var searchType=null;
    var searchField=null;
    var searchWord=null;

    if($.trim($("#search-word").val())!='') {
        searchField=$('input[name="search_type"]:checked').val();
        searchWord=$.trim($("#search-word").val());
    }

    $.getJSON('/admin/users.json',{'search_field':searchField,'search_word':searchWord,'per_page':perPage,'page':pageID},function(data) {
        $("#user-select-list tbody").empty();
        $('#user-select-list_count').val(data.total);

        if(data.length==1) {
            $.each(data,function(index,value){
                if(value.left_coupon) {
                    var left_coupon=value.left_coupon;
                } else {
                    var left_coupon=0;
                }

                $("#user-select-list tbody").append('<tr>'+input+'<td class="name">'+value['name']+'</td><td class="phone">'+add_hyphen(value['phone'])+'</td></tr>');
            });

            $('#user-select-list tbody td').click(m_td_click);
            $('#user-select-list tbody tr td input').click(function(e) {
                e.stopPropagation();
            }).change(function(){
                var tr=$(this).closest('tr');
                var u_id=tr.find('td:first input').val();
                var u_name=tr.find('td:eq(1)').text();
                var u_phone=tr.find('td:eq(3)').text();
                var left_coupon=tr.find('td input:eq(1)').val();
                var black_list_exists= tr.find('td input:eq(2)').val();
                var black_list= tr.find('td input:eq(3)').val();

                var content={'id':u_id,'name':u_name,'left_coupon':left_coupon,'phone':u_phone,'black_list_exists':black_list_exists,'black_list':black_list};
                select_user(content);
            });
        } else {
            $("#user-select-list tbody").append('<tr><td colspan="4" style="text-align:center">해당 데이터가 없습니다.</td></tr>');
        }
        $(".sl_pagination").removeData("load").empty();
        initPagination(data.length,10,current_page);
    });
}

function m_td_click() {
    var i_checkbox = $(this).parent().find('input:first').prop('checked',true).change();
}

function select_user(content) {
    $("#order-user-id").val(content.id);
    $("#user-info").show();
    $("#user-search").hide();

    var user_name=content.name;

    if($("#display_coupon").val()==1) {
        user_name+= '<br />('+content.left_coupon+'회 남음)<input type="hidden" id="left_coupon" value="'+content.left_coupon+'">';
    }

    $("#user_name").html(user_name);
    /* '<br />('+content.level_name+')<input type="hidden" id="dc_rate" value="'+content.dc_rate+'" />'); */

    if(content.phone) {
        var phone=content.phone;
    } else {
        var phone='미입력';
    }
    $("#user_phone").text(phone);

    if(content.black_list_exists>0) {
        $("#user-search-form .card").addClass('border-warning');

        var card_footer=$('<div>');
        card_footer.addClass('card-footer bg-warning border-warning');
        card_footer.html('<span class="text text-white">'+content.black_list+'</span>');

        $("#user-search-form .card").append(card_footer);
    } else {
        if($("#user-search-form .card").hasClass('border-warning')) {
            $("#user-search-form .card").removeClass('border-warning');
        }
    }

    if($("#order_complete").length) {
        if(phone!='미입력') {
            $('#order_form input[name="CashNumber"]').val(phone.replace(/-/g, ""));
        }
    }

    localStorage.setItem('user', JSON.stringify(content));
}

var ready=function(){
    var p_index=0;
    var no_exists_order_t=$('#no_data_t').val();
    $('#order_form .delete').click(delete_order);
    $('#order_form .plus').click(plus_click);
    $('#order_form .minus').click(minus_click);

    $('input[name="search_field"]').change(function() {
        $("#search_label").text($(this).parent().find('label').text());
        $("#search-word").val('');
        $("#search-word").focus();
    });

    function delete_order(){
        var tr=$(this).closest('tr');
        var tbody=$(this).closest('tbody');

        var product_id=tr.find('input:first').val();
        var product_ele=$('#order-new .list input.product_id[value="'+product_id+'"]');
        var ele=product_ele.closest('.card').find('.quantity');
        ele.val(0);

        make_order();
    }

    function plus_click(){
        var tr=$(this).closest('tr');
        var product_id=tr.find('input:first').val();
        var product_ele=$('#order-new .list input.product_id[value="'+product_id+'"]');
        var ele=product_ele.closest('.card').find('.quantity');

        ele.val(Number(ele.val())+1);
        make_order();
    }

    function minus_click(){
        var tr=$(this).closest('tr');
        var product_id=tr.find('input:first').val();
        var product_ele=$('#order-new .list input.product_id[value="'+product_id+'"]');
        var ele=product_ele.closest('.card').find('.quantity');

        ele.val(Number(ele.val())-1);
        make_order();
    }

    function make_order(){
        if($("#order_form tbody .no_data").length) {
            $("#order_form tbody tr").remove();
        }

        $("#order_form tbody .order").remove();


        var total_quantity=new Array();
        var total_price=new Array();

        $("#order-new .list article .card").each(function(){
            var quantity = $(this).find('input.quantity').val();

            if(quantity==0) {
                return true;
            }

            var title=$(this).find('.card-header').text();
            var product_id = $(this).find('input.product_id').val();
            var price=$(this).find('input[name="price[]"]').val();
            var dc_rate=0;


            var last_price=Number(quantity*(price-(price*(dc_rate/100))));

            total_quantity.push(quantity)
            total_price.push(last_price);

            // total_dc.push(dc_rate);


            var tr=$('<tr class="order"><td><input type="hidden" value="'+product_id+'">'+title+'</td><td class="price text-right"><span class="price_t">'+last_price.toLocaleString()+'</span></td><td class="text-center"><span class="btn btn-success plus">+</span>&nbsp;<span class="quantity">'+quantity+'</span>&nbsp;<span class="btn btn-warning minus">-</span></td><td class="text-right"><span class="btn btn-danger delete">'+$('#cancel_s').text()+'</span></td></tr>');
            tr.find('.delete').click(delete_order);
            tr.find('.plus').click(plus_click);
            tr.find('.minus').click(minus_click);

            $("#order_form tbody").append(tr);
            tr.effect('highlight',1000);
            p_index++;
        });

        var total_result_price=total_price.reduce((a, b) => a + b, 0);

        $('#total-price').text(Number(total_result_price).toLocaleString( 'ko-KR',{style:"currency", currency:"KRW"}));

        if($('#order_form table tbody tr.order').length) {
            $('#select-complete').removeClass('disabled');
        } else {
            $('#select-complete').addClass('disabled');
            $('#order_form tbody').append('<tr><td colspan="4" class="no_data">'+no_exists_order_t+'</td></tr>');
        }
    }


    $("#order-new .list article .card input.quantity").change(function(event){
        make_order();
    });
    $("#order-new .list article .card-header,#order-new .list article .card-body").click(function () {
        $(this).closest('.card').find('input.quantity').val(Number($(this).closest('.card').find('input.quantity').val())+1).change();
    }).css('cursor','pointer');


    // 자바스크립트가 지원될때 Tr 커서 선택
    $("#user-select-list tbody tr,#order_add article .card").css('cursor','pointer');
    $('#user-select-list tbody td').click(m_td_click);

    $('#user-select-list tbody tr td input').change(function(){
        var tr=$(this).closest('tr');
        var u_id=tr.find('td:first input').val();
        var u_name=tr.find('td:eq(1)').text();
        var u_phone=tr.find('td:eq(2)').text();
        var left_coupon=tr.find('td input:eq(1)').val();
        var black_list_exists=tr.find('td input:eq(3)').val();
        var black_list=tr.find('td input:eq(4)').val();

        var content={'id':u_id,'name':u_name,'left_coupon':left_coupon,'phone':u_phone, 'black_list_exists':black_list_exists,'black_list':black_list};
        select_user(content);
    });
    initPagination(Number($('#user-select-list-count').val()),10,0);

    $("#user_select_cancel").click(function(){
        $("#user-info").hide();
        $("#user-search").show();
        $("#order-user-id").val('');

        if($(this).closest('.card').hasClass('border-warning')) {
            $(this).closest('.card').removeClass('border-warning');
            $(this).closest('.card').find('.card-footer').remove();
        }

        localStorage.removeItem('user');
    });

    $('input[name="search_field"]').change(function(){
        $("#search_label").text($(this).parent().find('label').text());
    });

    $('input[name="search_field"]').each(function(){
        if($(this).is(":checked")) {
            $("#search_label").text($(this).parent().find('label').text());
        }
    });

    $("#user-search-form").submit(function(){
        var search_field=$(this).find('input[name="search_field"]:checked').val();
        var search_word=$(this).find('#search-word').val();

        $.getJSON('/admin/users.json',{'search_field' : search_field,'search_word' : search_word,'per_page':10,'page':1},function(data){
            if(data.length==1) {
                $("#user-select-list").hide();
                var content=data[0];

                select_user(content);

                $("#user-search-form h3 span:first").hide();
                $("#user-search-form h3 span:eq(1)").show();
            } else {
                if(data.length) {
                    $("#user-select-list").show();
                    $("#user-select-list tbody").empty();
                    $('#user-select-list_count').val(data.total);

                    $.each(data,function(index,value){

                        if(value.left_coupon) {
                            var left_coupon=value.left_coupon;
                        } else {
                            var left_coupon=0;
                        }

                        var input='<td class="text-center"><input name="id" value="'+value.id+'" type="radio"><input type="hidden" value="'+left_coupon+'"><input type="hidden" value="'+value.black_list_exists+'"><input type="hidden" value="'+value.black_list+'"></td>';

                        $("#user-select-list tbody").append('<tr>'+input+'<td class="name">'+value['name']+'</td><td class="phone">'+add_hyphen(value['phone'])+'</td></tr>');
                    });

                    $('#user-select-list tbody td').click(m_td_click);
                    $('#user-select-list tbody tr td input').click(function(e) {
                        e.stopPropagation();
                    }).change(function(){
                        var tr=$(this).closest('tr');
                        var u_id=tr.find('td:first input').val();
                        var u_name=tr.find('td:eq(1)').text();
                        var u_phone=tr.find('td:eq(2)').text();
                        var left_coupon=tr.find('td input:eq(1)').val();
                        var black_list_exists=tr.find('td input:eq(3)').val();
                        var black_list=tr.find('td input:eq(4)').val();

                        var content={'id':u_id,'name':u_name,'left_coupon':left_coupon,'phone':u_phone,'black_list_exists':black_list_exists,'black_list':black_list};
                        select_user(content);
                    });
                } else {
                    $("#user-select-list").show();
                    $("#user-select-list tbody").empty();
                    $("#user-select-list tbody").append('<tr><td colspan="4" style="text-align:center">해당 데이터가 없습니다.</td></tr>');
                }
                $(".sl_pagination").removeData("load").empty();
                initPagination(data.total,10,current_page);
            }
        });

        return false;
    });

    $("#select-complete").click(function(){
        if($(this).hasClass('disabled')) {
            alert('먼저 상품을 선택해주세요');
            return false;
        }
        $('.order-layer').hide();
        $('.payment-layer').show();
    });

    $("#cancel_all").click(function(){
        $("#order-new .list article .card input.quantity").val(0);

        $("#order_form tbody").empty();
        var no_eo_tr=$('<tr><td colspan="4" class="no_data">'+no_exists_order_t+'</td></tr>');
        $("#order_form tbody").append(no_eo_tr);

        make_order();
    });

    $("#order_form").submit(function(){
        localStorage.removeItem('user');
        localStorage.removeItem('orders');
    });

    $("#anon").change(function(){
        if($(this).is(":checked")) {
            $("#order-user-id").val($("#anon_id").val());
            $(".non-anon").hide();
            $("#p_type2").click();
            $("#p_type1").attr('disabled','disabled');
        } else {
            $("#order-user-id").val('');
            $(".non-anon").show();
            $("#user-select-list").hide();
            $("#p_type1").removeAttr('disabled');
        }
    });

    // 기간 선택시 날짜 채워지기
    $('input[name="date_p"]').change(function(){
        if($("#future_search").length) {
            if($("#future_search").val()==1) {
                if($(this).val()=='all') {
                    $('input[name="start_date"]').val('').effect("highlight");
                    $('input[name="end_date"]').val('').effect("highlight");
                } else {
                    setDateInput($(this).val());
                }
                return true;
            }
        }

        if($(this).val()=='all') {
            $('input[name="start_date"]').val('').effect("highlight");
            $('input[name="end_date"]').val('').effect("highlight");
        } else {
            setDateInput($(this).val());
        }
    });

    $('.input-daterange input').each(function() {
        $(this).datepicker({language: "ko",todayHighlight: true, maxViewMode : 'decades'});
    });


    $('#no-sns-id').click(function(){
        $("#no-sns-login").show();
        $("#sns-login,#no-sns-id").hide();
        $("#no-sns-id").parent().hide();
    });

    $('#myModal').on('hidden.bs.modal', function () {
        $(this).removeData('bs.modal');
    });

    $('.modal_link').click(function(event){
        event.preventDefault();
        $('#myModal').removeData("modal");
        $('#myModal').load($(this).attr('href')+'?no_layout=true',function(){
            $('#myModal').modal();
        });
        return false;
    });

};

$(document).ready(ready);
document.addEventListener("DOMContentLoaded", (event) => {
    Rails.start();
});
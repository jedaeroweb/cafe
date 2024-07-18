
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

function calc_total_price() {
    var total_title=new Array();
    var total_quantity=new Array();
    var total_price=new Array();
    var total_dc=new Array();

    $("#order_form tr").each(function(index){
        if(!index) {
            return true;
        }

        total_title.push($(this).find('td:first').text());
        total_quantity.push($(this).find('td:first input:eq(1)').val());
        total_price.push($(this).find('td.price input:first').val());
        total_dc.push($(this).find('td.price input:eq(1)').val());
    });

    //var oder_total_title1= Number(Number($("#order_count").val())+Number(1));
    var oder_total_title2= total_title.join('/');
    var jbSplit3 = oder_total_title2.split('/');

    total_result_price=0;

    for ( var p in jbSplit3 ) {
        total_result_price+=(total_price[p]*total_quantity[p]);
        //   total_result_price+=(total_price[p]-(total_price[p]*(total_dc[p]/100)))*total_quantity[p];
    }

    $('#total_price').text(Number(total_result_price).toLocaleString());
}

function order_display() {
    if(!$("#order_form table tr.order").length) {
        return true;
    }

    $("#order_form table tr.order").each(function(){
        var price=$(this).find('td.price input:first').val();
        // $(this).find('td.price input:eq(1)').val(content.dc_rate);
        //$(this).find('td.price .price_t').text(Number(price-(price*(content.dc_rate/100))).toLocaleString());

        $(this).find('td.price .price_t').text(Number(price).toLocaleString());
    });

    save_storage();
    calc_total_price();
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

    order_display();

    if($("#order_complete").length) {
        if(phone!='미입력') {
            $('#order_form input[name="CashNumber"]').val(phone.replace(/-/g, ""));
        }
    }

    localStorage.setItem('user', JSON.stringify(content));
}


function save_storage() {
    var orders=[];
    $('#order_form table tbody tr.order').each(function(index){
        order={
            'product':$(this).find('input:first').val(),
            'quantity' : $(this).find('input:eq(1)').val(),
            'product_name' : $(this).find('td:first').text(),
            'price' : $(this).find('input:eq(2)').val(),
        };
        orders.push(order);
    });
    localStorage.setItem('orders', JSON.stringify(orders));
}


var ready=function(){

};

$(document).ready(ready);
document.addEventListener("turbo:load", ready);
document.addEventListener("DOMContentLoaded", (event) => {
    Rails.start();
});

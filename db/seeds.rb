# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

AuthenticationProvider.create!(name: 'kakao')
AuthenticationProvider.create!(name: 'twitter')
AuthenticationProvider.create!(name: 'google_oauth2')
AuthenticationProvider.create!(name: 'apple')
AuthenticationProvider.create!(name: 'facebook')
AuthenticationProvider.create!(name: 'naver')
AuthenticationProvider.create!(name: 'github')

Payment.create!(id: 1, title: '현금')
Payment.create!(id: 2, title: '카드')
Payment.create!(id: 3, title: '포인트')
Payment.create!(id: 4, title: '추후청구')
Payment.create!(id: 5, title: '핸드폰')
Payment.create!(id: 6, title: '계좌이체')
Payment.create!(id: 7, title: '가상계좌')
Payment.create!(id: 8, title: '무통장입금')

UserType.create!(id: 1, title: '회원만 사용')
UserType.create!(id: 2, title: '익명사용자만 사용')
UserType.create!(id: 3, title: '회원 및 익명사용자')

Company.create!(id: 1, title: '피씨방')
Company.create!(id: 2, title: '매점')
Company.create!(id: 3, title: '임시 매점')

Branch.create!(id: 1, company_id: 1, title: '피씨방', sample: true, branch_setting_attributes: { use_unique_number: true, branch_setting_user_type_attributes: { user_type_id: 3 }, branch_setting_payments_attributes: [{ payment_id: 1 }, { payment_id: 2 }, { payment_id: 3 }, { payment_id: 4 }] })
Branch.create!(id: 2, company_id: 2, title: '매점', branch_setting_attributes: { use_unique_number: true, branch_setting_user_type_attributes: { user_type_id: 2 }, branch_setting_payments_attributes: [{ payment_id: 1 }, { payment_id: 2 }] })
Branch.create!(id: 3, company_id: 3, title: '임시 매점', branch_setting_attributes: { use_unique_number: false, branch_setting_user_type_attributes: { user_type_id: 1 }, branch_setting_payments_attributes: [{ payment_id: 3 }, { payment_id: 4 }] })

Admin.create!(id: 1, branch_id: 1, email: 'admin@jedaeroweb.co.kr', name: '잠자는사자', password: 'a12345', password_confirmation: 'a12345', admin_picture_attributes: { picture: File.open(Rails.root.join("app", "assets", "images", "dog.png")) })
#Admin.create!(id: 2, branch_id: 2, email: '', name: '매점 관리자', password: '123456', password_confirmation: '123456')
#Admin.create!(id: 3, branch_id: 3, email: '', name: '매점 관리자', password: '123456', password_confirmation: '123456')

Role.create!(id: 1, title: '전체관리자', role: 'super_administrator')
Role.create!(id: 2, title: '관리자', role: 'administrator')
Role.create!(id: 3, title: '보조관리자', role: 'sub_administrator')
Role.create!(id: 4, title: '운영자', role: 'operator')
Role.create!(id: 5, title: '보조운영자', role: 'sub_operator')
Role.create!(id: 6, title: '알바생', role: 'reader')

RoleAdmin.create!(role_id: 1, admin_id: 1)
#RoleAdmin.create!(role_id: 1,admin_id: 2)
#RoleAdmin.create!(role_id: 2,admin_id: 3)
#RoleAdmin.create!(role_id: 3,admin_id: 4)
#RoleAdmin.create!(role_id: 4,admin_id: 5)

AccountCategory.create!(id: 1, title: '구입', enable: true)
AccountCategory.create!(id: 2, title: '환불', enable: true)
AccountCategory.create!(id: 3, title: '포인트충전', enable: true)
AccountCategory.create!(id: 4, title: '포인트환불', enable: true)

ProductCategory.create!(id: 1, branch_id: 1, title: '커피', enable: true)
ProductCategory.create!(id: 2, branch_id: 1, title: '음료', enable: true)
ProductCategory.create!(id: 3, branch_id: 1, title: '간식', enable: true)

ProductCategory.create!(id: 4, branch_id: 2, title: '커피', enable: true)
ProductCategory.create!(id: 5, branch_id: 2, title: '캔', enable: true)
ProductCategory.create!(id: 6, branch_id: 2, title: '빵', enable: true)

ProductCategory.create!(id: 7, branch_id: 3, title: '음료', enable: true)
ProductCategory.create!(id: 8, branch_id: 3, title: '과자', enable: true)

Product.create!(id: 1, branch_id: 1, product_category_id: 1, title: '아메리카노', price: 2000, enable: true)
Product.create!(id: 2, branch_id: 1, product_category_id: 1, title: '라떼', price: 2000, enable: true)
Product.create!(id: 3, branch_id: 1, product_category_id: 2, title: '우유', price: 2000, enable: true)
Product.create!(id: 4, branch_id: 1, product_category_id: 2, title: '콜라', price: 2000, enable: true)
Product.create!(id: 5, branch_id: 1, product_category_id: 2, title: '사이다', price: 2000, enable: true)
Product.create!(id: 6, branch_id: 1, product_category_id: 3, title: '라면', price: 2000, enable: true)
Product.create!(id: 7, branch_id: 1, product_category_id: 3, title: '빵', price: 2000, enable: true)
Product.create!(id: 8, branch_id: 2, product_category_id: 3, title: '과자', price: 2000, enable: true)
Product.create!(id: 9, branch_id: 2, product_category_id: 4, title: '아메리카노', price: 2000, enable: true)
Product.create!(id: 10, branch_id: 2, product_category_id: 4, title: '라떼', price: 2000, enable: true)
Product.create!(id: 11, branch_id: 2, product_category_id: 5, title: '사이다', price: 2000, enable: true)
Product.create!(id: 12, branch_id: 2, product_category_id: 5, title: '콜라', price: 2000, enable: true)
Product.create!(id: 13, branch_id: 2, product_category_id: 5, title: '주스', price: 2000, enable: true)
Product.create!(id: 14, branch_id: 2, product_category_id: 6, title: '단팥빵', price: 2000, enable: true)
Product.create!(id: 15, branch_id: 2, product_category_id: 6, title: '공갈빵', price: 2000, enable: true)
Product.create!(id: 16, branch_id: 3, product_category_id: 7, title: '콜라', price: 2000, enable: true)
Product.create!(id: 17, branch_id: 3, product_category_id: 8, title: '감자칩', price: 2000, enable: true)

Group.create!(id: 1, branch_id: 1, title: 'VIP')
Group.create!(id: 2, branch_id: 1, title: 'Special')
Group.create!(id: 3, branch_id: 1, title: 'Normal')

User.create!(id: 1, branch_id: 1, name: '익명사용자')
User.create!(id: 2, branch_id: 1, name: '사용자1', phone: '111-1111')
User.create!(id: 3, branch_id: 1, name: '사용자2', phone: '222-2222')
User.create!(id: 4, branch_id: 1, name: '사용자3', phone: '333-3333')
User.create!(id: 5, branch_id: 1, name: '사용자4', phone: '444-4444')
User.create!(id: 6, branch_id: 1, name: '사용자1', phone: '111-2222')
User.create!(id: 7, branch_id: 1, name: '사용자2', phone: '222-3333')
User.create!(id: 8, branch_id: 1, name: '사용자3', phone: '333-4444')
User.create!(id: 9, branch_id: 1, name: '사용자4', phone: '444-5555')
User.create!(id: 10, branch_id: 1, name: '사용자1', phone: '111-1212')
User.create!(id: 11, branch_id: 1, name: '사용자2', phone: '222-1313')
User.create!(id: 12, branch_id: 1, name: '사용자3', phone: '333-1414')
User.create!(id: 13, branch_id: 1, name: '사용자4', phone: '444-1515')
User.create!(id: 14, branch_id: 1, name: '사용자1', phone: '111-5555')
User.create!(id: 15, branch_id: 1, name: '사용자2', phone: '222-6666')
User.create!(id: 16, branch_id: 1, name: '사용자3', phone: '333-7777')
User.create!(id: 17, branch_id: 1, name: '사용자4', phone: '444-8888')

UserAnon.create!(user_id: 1)

User.create!(id: 18, branch_id: 2, name: '사용자4', phone: '555-5555')
User.create!(id: 19, branch_id: 2, name: '사용자4', phone: '666-6666')
User.create!(id: 20, branch_id: 2, name: '사용자4', phone: '777-7777')
User.create!(id: 21, branch_id: 2, name: '사용자4', phone: '888-8888')

User.create!(id: 22, branch_id: 3, name: '사용자4', phone: '999-9999')
User.create!(id: 23, branch_id: 3, name: '사용자4', phone: '121-1211')
User.create!(id: 24, branch_id: 3, name: '사용자4', phone: '333-4444')
User.create!(id: 25, branch_id: 3, name: '사용자4', phone: '444-5555')

I18n.locale = :en

role = Role.find(1)
role.title = 'super administrator'
role.save!

role = Role.find(2)
role.title = 'administrator'
role.save!

role = Role.find(3)
role.title = 'sub administrator'
role.save!

role = Role.find(4)
role.title = 'operator'
role.save!

role = Role.find(5)
role.title = 'sub operator'
role.save!

role = Role.find(6)
role.title = 'reader'
role.save!

payment = Payment.find(1)
payment.title = 'cash'
payment.save!

payment = Payment.find(2)
payment.title = 'card'
payment.save!

payment = Payment.find(3)
payment.title = 'point'
payment.save!

payment = Payment.find(4)
payment.title = 'admin'
payment.save!

payment = Payment.find(5)
payment.title = 'cellphone'
payment.save!

payment = Payment.find(6)
payment.title = 'account transaction'
payment.save!

payment = Payment.find(7)
payment.title = 'admin'
payment.save!

payment = Payment.find(8)
payment.title = 'admin'
payment.save!

user_type = UserType.find(1)
user_type.title = 'use members only'
user_type.save!

user_type = UserType.find(2)
user_type.title = 'not use members / only anon'
user_type.save!

user_type = UserType.find(3)
user_type.title = 'use members and anon'
user_type.save!

account_category = AccountCategory.find(1)
account_category.title = 'buy'
account_category.save!

account_category = AccountCategory.find(2)
account_category.title = 'refund'
account_category.save!

account_category = AccountCategory.find(3)
account_category.title = 'charge_point'
account_category.save!

account_category = AccountCategory.find(4)
account_category.title = 'refund point'
account_category.save!

I18n.locale = :'zh-CN'

payment = Payment.find(1)
payment.title = 'cash'
payment.save!

payment = Payment.find(2)
payment.title = 'card'
payment.save!

payment = Payment.find(3)
payment.title = 'point'
payment.save!

payment = Payment.find(4)
payment.title = 'admin'
payment.save!

payment = Payment.find(5)
payment.title = 'admin'
payment.save!

payment = Payment.find(6)
payment.title = 'admin'
payment.save!

payment = Payment.find(7)
payment.title = 'admin'
payment.save!

payment = Payment.find(8)
payment.title = 'admin'
payment.save!

user_type = UserType.find(1)
user_type.title = 'use members only'
user_type.save!

user_type = UserType.find(2)
user_type.title = 'not use members / only anon'
user_type.save!

user_type = UserType.find(3)
user_type.title = 'use members and anon'
user_type.save!

account_category = AccountCategory.find(1)
account_category.title = 'buy'
account_category.save!

account_category = AccountCategory.find(2)
account_category.title = 'refund'
account_category.save!

account_category = AccountCategory.find(3)
account_category.title = 'charge_point'
account_category.save!

account_category = AccountCategory.find(4)
account_category.title = 'refund point'
account_category.save!

role = Role.find(1)
role.title = 'super administrator'
role.save!

role = Role.find(2)
role.title = 'administrator'
role.save!

role = Role.find(3)
role.title = 'sub administrator'
role.save!

role = Role.find(4)
role.title = 'operator'
role.save!

role = Role.find(5)
role.title = 'sub operator'
role.save!

role = Role.find(6)
role.title = 'reader'
role.save!
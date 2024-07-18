class AdminAbility
  include CanCan::Ability

  def initialize(admin)
    if admin
      can :read, [Order]
      if admin.role? :super_administrator
        can :manage, :all
      elsif admin.role? :administrator
        can :manage, :all
        cannot :read, [Company]
        cannot :create, [Company]
        cannot :edit, [Company]
        cannot :delete, [Company]
      elsif admin.role? :sub_administrator
        can :manage, :all
        cannot :read, [Company]
        cannot :create, [Company, Branch]
        cannot :edit, [Company, Branch]
        cannot :delete, [Company, Branch]
      elsif admin.role? :operator
        can :manage, :all
        cannot :read, [Branch, Admin]
        cannot :create, [Branch, Admin, Group, ProductCategory]
        cannot :edit, [Branch, Admin, Group, ProductCategory]
        cannot :delete, [Branch, Admin, Group, ProductCategory]
      elsif admin.role? :sub_operator
        can :manage, :all
        cannot :read, [Branch, Admin]
        cannot :create, [Branch, Admin, Group, ProductCategory, Product]
        cannot :edit, [Branch, Admin, Group, ProductCategory, Product, Order, Account]
        cannot :delete, [Branch, Admin, Group, ProductCategory, Product, Order, Account]
      elsif admin.role? :reader
        can :read, :all
        cannot :read, [Branch, Admin, Group, ProductCategory]
      end
    else
      cannot :manage, :all
    end
  end
end

class UserAbility
  include CanCan::Ability

  def initialize(user)
    cannot :manage, :all
    can :read, [Order]
    can :create, []
    if user
      can :read, :all
      can :create, [Order]
      unless user.user_admins_count.zero?
        can :manage, :all
      end
    end
  end
end

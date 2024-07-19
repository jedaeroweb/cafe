class UserAbility
  include CanCan::Ability

  def initialize(user)
    cannot :manage, :all
    if user
      can :read, [Order]
      can :create, [Order]
      unless user.user_admins_count.zero?
        can :manage, :all
      end
    end
  end
end

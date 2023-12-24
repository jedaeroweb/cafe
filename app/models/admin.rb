class Admin < ApplicationRecord
  after_initialize :default_values
  include OmniauthAttributesConcern
  devise :database_authenticatable, :registerable, :trackable, :validatable, :timeoutable, :omniauthable
  translates :name

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates_uniqueness_of :email
  validates_length_of :name, within: 1..60
  validates_length_of :email, within: 4..150
  validates_length_of :password, within: 5..255

  belongs_to :branch, counter_cache: true
  has_one :admin_picture, dependent: :destroy
  has_one :role_admin
  has_one :role, through: :role_admin
  has_many :admin_login_log, dependent: :destroy
  accepts_nested_attributes_for :admin_picture, allow_destroy: true

  #def password=(pass)
  #  if pass.present?
  #    @password = pass
  #    admin = Admin.new(login_id: login_id, password: pass)
  #    self.encrypted_password = admin.encrypted_password
  #  end
  #end

  def role?(role)
    unless self.role.present?
      return false
    end

    if self.role.role==role.to_s
      return true
    else
      return false
    end
  end

  def timeout_in
    1.day
  end

  def add_role_admin
    self.create_role_admin!(role_id: 2, admin_id: self)
  end

  private

  def default_values
    self.registration_date ||= Date.today
  end
end

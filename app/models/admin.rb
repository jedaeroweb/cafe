class Admin < ApplicationRecord
  after_initialize :default_values
  devise :database_authenticatable
  translates :name

  validates_length_of :name, within: 1..60
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, allow_blank: true
  validates_uniqueness_of :email, allow_blank: true
  validates_length_of :email, within: 4..150, allow_blank: true

  belongs_to :branch, counter_cache: true
  has_one :admin_picture, dependent: :destroy
  has_one :role_admin
  has_one :role, through: :role_admin
  has_many :admin_login_log, dependent: :destroy

  accepts_nested_attributes_for :role_admin, :allow_destroy => true
  accepts_nested_attributes_for :admin_picture, :allow_destroy => true

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

  private

  def default_values
    self.registration_date ||= Date.today
  end
end

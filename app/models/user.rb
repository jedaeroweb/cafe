class User < ApplicationRecord
  after_initialize :default_values

  include OmniauthAttributesConcern
  devise :database_authenticatable, :registerable, :recoverable, :validatable, :omniauthable, omniauth_providers: [:kakao, :naver, :twitter, :facebook, :apple, :google_oauth2, :github]

  validates_length_of :name, within: 1..60
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, allow_blank: true
  validates_uniqueness_of :email
  validates_length_of :email, within: 4..150, allow_blank: true
  validates_uniqueness_of :phone, allow_blank: true
  validates :password, length: { within: 5..255}, allow_blank: true
  validates_confirmation_of :password, allow_blank: true

  belongs_to :branch
  has_one :point, dependent: :destroy
  has_one :user_admin, dependent: :destroy
  has_one :admin, through: :user_admin
  has_one :user_picture, -> { order id: :desc }, dependent: :destroy
  has_one :user_group, dependent: :destroy
  has_one :user_unique_number, dependent: :destroy
  has_one :group, through: :user_group
  has_one :user_point, dependent: :destroy
  has_many :orders, dependent: :nullify
  has_many :accounts, dependent: :nullify
  has_many :user_authentications, dependent: :destroy

  accepts_nested_attributes_for :user_picture, allow_destroy: true, :reject_if => lambda { |c| c[:picture].blank? }
  accepts_nested_attributes_for :user_authentications, allow_destroy: true

  def self.create_from_omniauth(params)
    self.__send__(params.provider, params)
  end

  private

  def default_values
    self.registration_date ||= Date.today
  end
end

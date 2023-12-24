class User < ApplicationRecord
  after_initialize :default_values

  validates_length_of :name, within: 2..50
  # mount_uploader :photo, UserUploader

  belongs_to :branch, counter_cache: true
  has_one :point, dependent: :destroy
  has_one :user_admin, dependent: :destroy
  has_one :user_picture, -> { order id: :desc }, dependent: :destroy
  has_one :user_group, dependent: :destroy
  has_one :user_unique_number, dependent: :destroy
  has_one :group, through: :user_group
  has_one :user_anon
  has_one :user_point, dependent: :destroy
  has_many :orders, dependent: :nullify
  has_many :accounts, dependent: :nullify
  has_many :user_contents, dependent: :destroy

  accepts_nested_attributes_for :user_picture, allow_destroy: true, :reject_if => lambda { |c| c[:picture].blank? }
  accepts_nested_attributes_for :user_contents, allow_destroy: true, :reject_if => lambda { |c| c[:content].blank? }

  private

  def default_values
    self.registration_date ||= Date.today
  end
end

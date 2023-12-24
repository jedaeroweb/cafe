Rails.application.routes.draw do
  root 'home#index'

  if Rails.env.production?
    mount LetsEncrypt::Engine => '/.well-known'
  end

  resources :accounts
  resources :accounts_products
  resources :accounts_product_categories
  resources :product_categories
  resources :products
  resources :orders
  resources :users
  resources :points
  resources :operators
  resources :branches

  # 관리사용자
  devise_for :admins, :controllers => { :omniauth_callbacks=>'admins/omniauth_callbacks', :sessions => "admins/sessions",:registrations => "admins/registrations" }, :path_names =>  {:sign_up=>'new',:sign_in => 'login', :sign_out => 'logout'} do
    get 'edit', :to => 'admins::Registrations#edit'
    get 'login', :to => 'admins::Sessions#new'
    get 'logout', :to=> 'admins::Sessions#destroy'
  end

  # 관리자
  scope 'admin', module: 'admin', as: 'admin' do
    get '/' => 'orders#new'
    get 'branches/switch/:id', :to=>'branches#switch', as: 'branch_switch'

    resources :admins
    resources :accounts
    resources :product_categories
    resources :products
    resources :orders
    resources :groups
    resources :users
    resources :points
    resources :branches
  end
end

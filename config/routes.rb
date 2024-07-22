Rails.application.routes.draw do
  root 'orders#index'

  if Rails.env.production?
    mount LetsEncrypt::Engine => '/.well-known'
  end


  resources :products
  resources :orders
  resources :points
  resources :user_branches


  # 관리사용자
  devise_for :users, :controllers => {:omniauth_callbacks=>'users/omniauth_callbacks', :sessions => "users/sessions",:registrations => "users/registrations",:passwords => "users/passwords"}, :path_names =>  {:sign_up=>'new',:sign_in => 'login', :sign_out => 'logout'} do
    get 'edit', :to => 'users::Registrations#edit'
    get 'login', :to => 'users::Sessions#new'
    get 'logout', :to=> 'users::Sessions#destroy'
  end

  # 관리사용자
  devise_for :admins, :controllers => {:sessions => "admins/sessions",:registrations => "admins/registrations" }, :path_names =>  {:sign_up=>'new',:sign_in => 'login', :sign_out => 'logout'} do
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

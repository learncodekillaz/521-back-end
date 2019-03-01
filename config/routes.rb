Rails.application.routes.draw do
  # get 'messages/create'
  get 'chatrooms/index'
  resources :choices, constraints: ->(request){ !request.format.html?}
  resources :events, constraints: ->(request){ !request.format.html?}
  # resources :users
  devise_for :users

  resources :chatrooms, only: [:create] do
    member do
      post :close
    end
    resources :messages, only: [:create]
  end

  get '/users', to: 'users#index'
  get '/events', to: 'events#index'
  get '/invited', to: 'events#invited'
  get '/inviter', to:'users#inviter'


  authenticated:user do
    root "pages#protected", as: 'protected_root'
    get '*path', to: 'pages#protected', as: 'protected2_root'
  end

  root to: 'pages#unprotected'
end

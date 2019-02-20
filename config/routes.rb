Rails.application.routes.draw do
  resources :choices, constraints: ->(request){ !request.format.html?}
  resources :events, constraints: ->(request){ !request.format.html?}
  # resources :events, constraints: ->(request){ !request.format.html? }
  resources :users
  devise_for :users

  # get '/users', to: 'users#index'


  get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  root to: 'pages#unprotected'
end

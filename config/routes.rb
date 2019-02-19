Rails.application.routes.draw do
  resources :choices, constraints: ->(request){ !request.format.html?}
  resources :events, constraints: ->(request){ !request.format.html?}
  # resources :events, constraints: ->(request){ !request.format.html? }
  devise_for :users


  authenticated:user do
    root "pages#protected", as: 'protected_root'
    get '*path', to: 'pages#protected', as: 'protected2_root'
  end

  root to: 'pages#unprotected'
end

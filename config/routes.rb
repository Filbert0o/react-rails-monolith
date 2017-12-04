Rails.application.routes.draw do
  root 'static_pages#index'
  resources :cereals, only: [:index, :show]
  namespace :api do
    resources :cereals, only: [:index, :show]
  end
end

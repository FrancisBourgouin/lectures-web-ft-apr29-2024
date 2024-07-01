Rails.application.routes.draw do
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/" => "posts#index"

  # scope :api do
  #   resources :posts
  # end
  namespace :api do
    resources :posts
  end
end

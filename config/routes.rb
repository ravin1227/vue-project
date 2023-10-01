Rails.application.routes.draw do
    get "home/index"
    resources :detail, only: [:index]
    root to: "home#index"
end

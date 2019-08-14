Rails.application.routes.draw do
  resources :players
  get 'welcome/index'
  root 'welcome#index'
  get 'welcome/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

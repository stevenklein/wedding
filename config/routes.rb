WeddingSite::Application.routes.draw do
  resources :users
  resources :attendees
  resources :rsvps
  resources :sessions, only: [:new, :create, :destroy]
  root  'front_facing#index'
  match '/admin',  to: 'front_facing#admin',    via: 'get'
  match '/signup',  to: 'users#new',            via: 'get'
  match '/signin',  to: 'sessions#new',         via: 'get'
  match '/signout', to: 'sessions#destroy',     via: 'delete'
end

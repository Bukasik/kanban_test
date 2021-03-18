# frozen_string_literal: true

Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  
  namespace :api, constraints: { format: :json } do
    resources :boards, only: %i[show create] do
      resources :columns, only: %i[index show create destroy]
      resources :cards, only: %i[index show create update destroy]
    end
  end
end

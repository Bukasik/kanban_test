# frozen_string_literal: true

Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  namespace :api, constraints: { format: :json } do
    resources :boards, only: %i(create) do
      resources :columns, only: %i(index create destroy)
      resources :cards, only: %i(index create update destroy)
    end
  end
end

# frozen_string_literal: true

Rails.application.routes.draw do
  scope 'api/v1' do
    root 'home#index'
  end
end

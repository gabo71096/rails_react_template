# frozen_string_literal: true

# Home controller
class HomeController < ApplicationController
  def index
    render(json: { text: 'Hello from Rails API' })
  end
end

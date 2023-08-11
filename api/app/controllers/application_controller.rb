# frozen_string_literal: true

# Render React Frontend
class ApplicationController < ActionController::API
  def react
    send_file('public/index.html')
  end
end

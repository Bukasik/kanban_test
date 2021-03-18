# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Boards management', type: :request do
  it 'creates a Board' do
    headers = { 'ACCEPT' => 'application/json' }
    post '/api/boards', params: { title: 'Kanban' }, headers: headers
    expect(response.content_type).to eq('application/json; charset=utf-8')
    expect(response).to have_http_status(:created)
  end
end

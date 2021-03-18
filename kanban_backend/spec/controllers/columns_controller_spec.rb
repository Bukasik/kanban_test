# frozen_string_literal: true

require 'rails_helper'

describe Api::ColumnsController do
  let(:title) { 'In process' }
  let(:board) { boards(:test_board) }
  let(:column) { columns(:done) }

  describe '#index' do
    it 'return columns' do
      get :index, params: { board_id: board.id }, format: :json
      byebug
      expect(response).to be_successful
    end
  end

  describe '#show' do
    it 'return column' do
      get :show, params: { id: column.id, board_id: board.id }, format: :json

      expect(response).to be_successful
    end
  end

  describe '#create' do
    it 'return column' do
      post :create, params: { title: title, board_id: board.id }, format: :json

      expect(response).to be_successful
    end
  end

  describe '#destroy' do
    it 'return column' do
      delete :destroy, params: { id: column.id, board_id: board.id }, format: :json

      expect(response).to be_successful
    end
  end
end

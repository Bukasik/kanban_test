# frozen_string_literal: true

require "rails_helper"

describe Api::CardsController do
  let(:title) { "Refactor" }
  let(:board) { boards(:test_board) }
  let(:column) { columns(:done) }
  let(:new_column) { columns(:in_test) }
  let(:card) { cards(:card4) }

  describe "#index" do
    it "return cards" do
      get :index, params: { board_id: board.id }, format: :json

      expect(response).to be_successful
    end
  end

  describe "#create" do
    it "return card" do
      post :create, params: { board_id: board.id, card: { title: title, column_id: column.id } }, format: :json

      expect(response).to be_successful
    end
  end

  describe "#update" do
    it "return card" do
      put :update, params: { id: card.id, board_id: board.id, card: { title: title, column_id: new_column.id } },
                   format: :json

      expect(response).to be_successful
    end
  end

  describe "#destroy" do
    it "return card" do
      delete :destroy, params: { id: card.id, board_id: board.id, card: { column_id: column.id } }, format: :json

      expect(response).to be_successful
    end
  end
end

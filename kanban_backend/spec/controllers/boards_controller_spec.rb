# frozen_string_literal: true

require "rails_helper"

describe Api::BoardsController do
  let(:title) { "Канбан доска" }
  let(:board) { boards(:test_board) }

  describe "#create" do
    it "return boards" do
      post :create, params: { title: title }, format: :json

      expect(response).to be_successful
    end
  end
end

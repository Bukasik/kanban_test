# frozen_string_literal: true

require "rails_helper"

RSpec.describe BoardChannel, type: :channel do
  board = Board.create(title: "Test")

  it "successfully subscribes" do
    expect do
      described_class.broadcast_to(board, text: "Hi")
    end.to have_broadcasted_to(board)
  end

  it "matches with message" do
    expect do
      described_class.broadcast_to(
        board, { type: "ADD_LIST", list: { id: 1, title: "Тестовая колонка" } }
      )
    end.to have_broadcasted_to(board).with({ type: "ADD_LIST", list: { id: 1, title: "Тестовая колонка" } })
  end
end

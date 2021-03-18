require 'rails_helper'

RSpec.describe BoardChannel, type: :channel do
  board = Board.create(title: "Test")

  it "successfully subscribes" do
    expect {
      BoardChannel.broadcast_to(board, text: 'Hi')
    }.to have_broadcasted_to(board)
  end
  
  it "matches with message" do
    expect {
      BoardChannel.broadcast_to(
        board, type: "addItemColumn", column: { id: 1, title: "Тестовая колонка"}
      )
    }.to have_broadcasted_to(board).with(type: "addItemColumn", column: { id: 1, title: "Тестовая колонка"})
  end

end
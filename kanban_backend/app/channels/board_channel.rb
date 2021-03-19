# frozen_string_literal: true

class BoardChannel < ApplicationCable::Channel
  # def subscribed
  #   stream_from "board_#{params[:board]}"
  # end

  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end
  def subscribed
    board = Board.find(params[:board_id])
    stream_for board
  end

  # def unsubscribed
  # end
end

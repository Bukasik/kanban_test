# frozen_string_literal: true

module Api
  class BoardsController < ApplicationController
    def create
      board = Board.new(board_params)
      if board.save
        render json: board, status: :created
      else
        render json: { errors: board.errors }, status: :unprocessable_entity
      end
    end

    private

      def board_params
        params.permit(:title)
      end
  end
end

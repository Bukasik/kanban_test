# frozen_string_literal: true

module Api
  class CardsController < ApplicationController
    def index
      board = Board.find(params[:board_id])
      cards = Card.where(column_id: board.column_ids)

      render json: cards, each_serializer: CardSerializer
    end

    def create
      card = Card.new(card_params)
      board = Board.find(params[:board_id])
      if card.save
        render json: card, status: :created
        BoardChannel.broadcast_to board, { card: card, type: "ADD_CARD" }
      else
        render json: { errors: card.errors }, status: :unprocessable_entity
      end
    end

    def update
      card = Card.find(params[:id])
      board = Board.find(params[:board_id])
      if card.update(column_id: params[:column_id])
        card.reload
        BoardChannel.broadcast_to board, { card: card, type: "UPDATE_CARD" }
        render json: card
      end
    end

    def destroy
      card = Card.find(params[:id])
      board = Board.find(params[:board_id])
      if card.destroy
        BoardChannel.broadcast_to board, { card: card, type: "DELETE_CARD" }
        head :no_content
      end
    end

    private

      def card_params
        params.require(:card).permit(:title, :column_id)
      end
  end
end

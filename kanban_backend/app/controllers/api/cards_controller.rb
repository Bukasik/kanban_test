# frozen_string_literal: true

module Api
  class CardsController < ApplicationController
    # before_action :set_column
    # before_action :set_column_card, only: %i[show update destroy]

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
        BoardChannel.broadcast_to board, {card: card, type: "ADD_CARD"}
      else
        render json: { errors: card.errors }, status: :unprocessable_entity
      end
    end

    def update
      card = Card.find(params[:id])
      board = Board.find(params[:board_id])
      if card.update(column_id: params[:column_id])
        card.reload
        BoardChannel.broadcast_to board, {card: card, type: "UPDATE_CARD"}
        render json: card
      end
      # head :no_content
    end

    def destroy
      card = Card.find(params[:id])
      board = Board.find(params[:board_id])
      if card.destroy
        BoardChannel.broadcast_to board, {card: card, type: "DELETE_CARD"}
        head :no_content
      end
    end

    private

    def card_params
      params.require(:card).permit(:title, :column_id)
    end

    def set_column
      @column = Column.find(params[:column_id])
    end

    def set_column_card
      @card = @column.cards.find_by!(id: params[:id]) if @column
    end
  end
end

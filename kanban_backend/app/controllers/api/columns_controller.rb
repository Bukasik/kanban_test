# frozen_string_literal: true

module Api
  class ColumnsController < ApplicationController
    # before_action :set_board
    # before_action :set_board_column, only: %i[show destroy]

    def index
      columns = Board.find(params[:board_id]).columns
      render json: columns, each_serializer: ColumnSerializer
    end

    def create
      column = Column.new(column_params)
      board = Board.find(column_params[:board_id])
      if column.save
        render json: column, status: :created
        BoardChannel.broadcast_to board, {list: column, type: "ADD_LIST"}
      else
        render json: { errors: column.errors }, status: :unprocessable_entity
      end
    end

    def destroy
      column = Column.find(params[:id])
      board = Board.find(column_params[:board_id])
      if column.destroy
        BoardChannel.broadcast_to board, {list: column, type: "DELETE_LIST"}
        head :no_content
      end
    end

    private

    def column_params
      params.permit(:title, :board_id)
    end

    def set_board
      @board = Board.find(params[:board_id])
    end

    def set_board_column
      @column = @board.columns.find_by!(id: params[:id]) if @board
    end
  end
end

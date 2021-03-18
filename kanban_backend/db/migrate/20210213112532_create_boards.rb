# frozen_string_literal: true

class CreateBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards, id: :uuid do |t|
      t.string :title, null: false
    end
  end
end

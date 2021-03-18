# frozen_string_literal: true

class CreateColumns < ActiveRecord::Migration[6.1]
  def change
    create_table :columns do |t|
      t.references :board, type: :uuid
      t.string :title, null: false
    end
  end
end

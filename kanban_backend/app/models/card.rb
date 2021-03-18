# frozen_string_literal: true

class Card < ApplicationRecord
  belongs_to :column

  validates :title, presence: true
end

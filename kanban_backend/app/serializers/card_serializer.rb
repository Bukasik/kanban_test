# frozen_string_literal: true

class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :column_id
end

# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

board = Board.create(title: 'Test board')
column_1 = Column.create(title: 'Test column 1', board_id: board.id)
column_2 = Column.create(title: 'Test column 2', board_id: board.id)
column_3 = Column.create(title: 'Test column 3', board_id: board.id)
Card.create(title: 'Test card 1', column_id: column_1.id)
Card.create(title: 'Test card 2', column_id: column_1.id)
Card.create(title: 'Test card 3', column_id: column_1.id)
Card.create(title: 'Test card 1', column_id: column_2.id)
Card.create(title: 'Test card 2', column_id: column_2.id)
Card.create(title: 'Test card 3', column_id: column_2.id)
Card.create(title: 'Test card 1', column_id: column_3.id)
Card.create(title: 'Test card 2', column_id: column_3.id)
Card.create(title: 'Test card 3', column_id: column_3.id)
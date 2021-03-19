.PHONY: dev-setup
dev-setup:
	docker-compose build
	docker-compose run --rm kanban_backend /bin/bash -c " \
		POSTGRES_DATABASE=kanban_development; \
		RAILS_ENV=test bundle exec rake db:drop db:create db:migrate db:seed; \
		RAILS_ENV=development bundle exec rake db:create;"

.PHONY: prod-setup
prod-setup:
	docker-compose build
	docker-compose run --rm kanban_backend /bin/bash -c " \
		POSTGRES_DATABASE=kanban_production; \
		RAILS_ENV=test bundle exec rake db:drop db:create db:migrate db:seed; \
		RAILS_ENV=production bundle exec rake db:create;"
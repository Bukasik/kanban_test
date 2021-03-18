FROM ruby:2.7.2

RUN apt-get update -qq && apt-get install -y postgresql-client && apt-get clean

RUN gem install bundler -v 2.2.9
RUN mkdir /kanban_backend
WORKDIR /kanban_backend

COPY Gemfile Gemfile.lock /kanban_backend/
RUN bundle install

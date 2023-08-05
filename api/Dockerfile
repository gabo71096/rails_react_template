FROM ruby:3.2.2
WORKDIR /api
COPY . .
RUN bundle
CMD ["rails", "s", "-b", "0.0.0.0"]

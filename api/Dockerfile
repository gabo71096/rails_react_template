FROM ruby:3.2.2
RUN groupadd --gid 1020 ruby \
  && useradd --uid 1020 --gid ruby --shell /bin/bash --create-home ruby
WORKDIR /api
COPY . .
RUN bundle
RUN chown -R ruby:ruby .
EXPOSE 3000
CMD ["rails", "s", "-b", "0.0.0.0"]

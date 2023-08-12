# Ruby version
FROM ruby:3.2.2

# Arguments
ARG RAILS_ENV=production
ARG RAILS_SERVE_STATIC_FILES=true
ARG RAILS_LOG_TO_STDOUT=true
ARG BUNDLE_WITHOUT=development:test

# Environment Variables
ENV RAILS_ENV $RAILS_ENV
ENV RAILS_SERVE_STATIC_FILES $RAILS_SERVE_STATIC_FILES
ENV RAILS_LOG_TO_STDOUT $RAILS_LOG_TO_STDOUT
ENV BUNDLE_WITHOUT $BUNDLE_WITHOUT

# Create user and group
RUN groupadd --gid 1020 ruby \
  && useradd --uid 1020 --gid ruby --shell /bin/bash --create-home ruby

# Use ruby user created before
USER ruby

# Set workdir
WORKDIR /api

# Copy Gemfile and install gems
COPY --chown=ruby:ruby Gemfile* .
RUN bundle

# Copy app and chown files
COPY --chown=ruby:ruby . .

# Expose PORT
EXPOSE 3000

# Startup command
CMD ["rails", "s", "-b", "0.0.0.0"]

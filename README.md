# Rails API + React Template

I built this template to help start my development process a little faster, and thought of sharing it
for anyone that uses a setup like this.

I don't consider it production ready, as this was built thinking on the development environment,
but I don't think it requires much configuration to make it secure enough for production.

![demo](https://github.com/gabo71096/rails_react_template/assets/18217269/c8767f1f-fc16-484a-91a0-680882ffb768)

# Try it out

The easiest way to try it out is by using `docker`.

To get it running, fork/clone the project and cd into it.

You will need to setup the DB before using it, so firstly I would run `docker compose build`, then
`docker compose exec api rails db:setup` and lastly `docker compose up`.

# What's included

This selection of tools are staple for most of my projects, and includes the following:

## Frontend

- React created with Vite using TypeScript.
- Redux Toolkit
- React-Router
- TailwindCSS, TailwindCSS Animated and DaisyUI.
- ESLint, Prettier.
- React Toastify.
- React Icons.

## Backend

- Rails in API mode with PostgreSQL.
- RSpec, Faker and FactoryBot.
- Byebug
- Bullet.
- Rubocop.
- Solargraph.

  ### Debugging Rails

  You can use `byebug` wherever you want, but to interact with it, you will need to attach a terminal to the running
  Rails container, so run `docker ps`, copy the ContainerID, and then run `docker attach ContainerID`
  to start debugging.

## VSCode

- Added `devcontainer.json` file to develop inside a container in VSCode, it includes:
  - Ruby
  - Node
  - Postgres
  - Many useful extensions related to Rails and React

  You will need the `Dev Containers` extension.

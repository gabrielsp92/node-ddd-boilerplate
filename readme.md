# Node.js DDD api boilerplate

My custom nodejs boilerplate, following the Clean Architecture and DDD principles.

## Main Technologies

- [Nodejs](http://nodejs.org) - Javascript runtime.
- [Awilix](https://www.npmjs.com/package/awilix) - Dependency Injection and Inversion of Control framework.
- [Express](https://www.npmjs.com/package/express) - HTTP server framework.
- [Winston](https://www.npmjs.com/package/winston) - Centralizing and transporting log streams.
- [Joi](https://www.npmjs.com/package/joi) - Schema validations.
- [Structure](https://www.npmjs.com/package/structure) - Used for defining domain entities attributes.
- [Fejl](https://www.npmjs.com/package/fejl) - Error Handling
- [Jest](https://www.npmjs.com/package/jest) - Testing framework.
- [Supertest](https://www.npmjs.com/package/supertest) - Used to test http endpoints and features.
- [Swagger](https://swagger.io/) - Documentation with openApi specifications.


## Project Setup
Before running the project, check if you have Nodejs 14.0.> installed and remember to set the environment variables by creating a `.env` file following the `env.copy` example.

- Install node modules
  ```shell
  $ npm install
  ```

- Run project in development mode with hot-reload
  ```shell
  $ npm run dev
  ```

- Start the application
  ```shell
  $ npm start
  ```

- Run unit tests
  ```shell
  $ npm run test:unit
  ```

- Run features tests
  ```shell
  $ npm run test:features
  ```

After running the server, you can find the api docs at `http://localhost:{APP_PORT}/api/docs/`


# Todo: 
- [x] Create repo and readme.
- [x] Add awilix DI Container
- [x] Add express server interface
- [x] Add logger infrastructure
- [x] Add Swagger middleware
- [x] Add http client integration example
- [x] Add Error classes with fejl
- [x] Add jest unit config
- [ ] Add jest features config
- [ ] Add 100% test coverage
- [ ] Add Changelog.md file
- [ ] Add License file
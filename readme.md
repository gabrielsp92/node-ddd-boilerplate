# Node.js DDD api boilerplate

This is a personal project for a custom nodejs boilerplate, following the DDD architecture,
its is a starting point for micro services to be developed.

## Main techonologies used:

- [Node](http://nodejs.org) - Server side javascript runtime.
- [Awilix](https://www.npmjs.com/package/awilix) - Dependency Injection and Inversion of Control framework.
- [Express](https://www.npmjs.com/package/express) - HTTP server framework.
- [Winston](https://www.npmjs.com/package/winston) - Centralizing and transporting logs.
- [Joi](https://www.npmjs.com/package/joi) - Input and schema validations.
- [Structure](https://www.npmjs.com/package/structure) - Used for defining domain entities attributes.
- [Jest](https://www.npmjs.com/package/jest) - Testing framework.
- [Supertest](https://www.npmjs.com/package/supertest) - Used to test http endpoints and features.
- [Swagger](https://swagger.io/) - Documentation with openApi specifications.


## Project Setup
Set the environment variables by creating a `.env` file following the `env.copy` example, then, run the following scripts:

- Build containers with the environment infra structure
  ```shell 
  $ docker-compose up -d 
  ```

- Install project dependencies
  ```shell
  $ npm install
  ```

- Run project in development mode with nodemon
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


# Todo: 
- [x] Create repo and readme.
- [ ] Add awilix DI Container
- [ ] Add express server interface
- [ ] Add logger infrastructure
- [ ] Add Swagger middleware
- [ ] Add http client integration example
- [ ] Add sqs client integration example
- [ ] Add jest config
- [ ] Add 100% test coverage
- [ ] Add Changelog.md file
- [ ] Add License file
/* eslint-disable padded-blocks,import/no-extraneous-dependencies */

const chai = require('chai');
const supertest = require('supertest');
const chaiAsPromised = require('chai-as-promised');
const App = require('..');

let app;
let server;

before(async () => {
  app = await App();
});

beforeEach(async () => {
  chai.use(chaiAsPromised);
  chai.should();
  server = app.listen();
});

afterEach(() => {
  server.close();
});

describe('Application status', () => {

  describe('/', () => {

    it('should return application status', async () => {
      const pkg = require('../../package.json');

      await supertest(server)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200, {
          name: pkg.name,
          version: pkg.version,
          context: 'test',
          docs: 'https://addressbook-.herokuapp.com/docs',
        });
    });

  });

});

/* eslint-disable padded-blocks,import/no-extraneous-dependencies */

const chai = require('chai');
const supertest = require('supertest');
const chaiAsPromised = require('chai-as-promised');
const faker = require('faker');
const App = require('../../..');

let app;
let server;
let accessToken;

before(async () => {
  app = await App();
});

beforeEach(async () => {
  chai.use(chaiAsPromised);
  chai.should();
  server = app.listen();

  accessToken = await supertest(server)
    .post('/api/v1/auth/jwt')
    .send({
      username: 'admin',
      password: 'admin',
      scopes: ['admin:admin'],
    })
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      return response.body.token.accessToken;
    });
});

afterEach(() => {
  server.close();
});

const adaptStr = str => (min, max) => {
  str = str.padEnd(min, '_');
  return str.substr(0, max);
};

const generateUser = () => ({
  name: adaptStr(faker.name.findName())(4, 80),
  email: adaptStr(faker.internet.email())(5, 320),
  about: adaptStr(faker.name.jobDescriptor())(5, 300),
  username: adaptStr(faker.internet.userName())(4, 15),
  password: adaptStr(faker.internet.password())(5, 50),
  active: faker.random.boolean(),
});

describe('/api/v1/user', () => {

  describe('/create', () => {

    it('should create a user', async () => {
      const user = generateUser();

      await supertest(server)
        .post('/api/v1/user')
        .send(user)
        .set('Authorization', `Bearer ${accessToken}`)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .then((res) => {
          const { body: createdUser } = res;
          createdUser.should.be.an('object');
          createdUser._id.should.be.a('string');
          createdUser.active.should.be.equals(user.active);
          createdUser.createdAt.should.be.a('string');
          createdUser.email.should.be.equals(user.email);
          createdUser.name.should.be.equals(user.name);
          createdUser.updatedAt.should.be.a('string');
          createdUser.username.should.be.equals(user.username);
          createdUser.should.not.have.property('password');
        });
    });

  });

  describe('/update', () => {

    it('should update a user', async () => {
      const user = generateUser();

      const createdUser = await supertest(server)
        .post('/api/v1/user')
        .send(user)
        .set('Authorization', `Bearer ${accessToken}`)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => res.body);

      const toUpdate = generateUser();
      delete toUpdate.active;

      await supertest(server)
        .put(`/api/v1/user/${createdUser._id}`)
        .send(toUpdate)
        .set('Authorization', `Bearer ${accessToken}`)
        .set('Content-Type', 'application/json')
        .expect(204)
        .then((res) => {
          const { body: createdUser } = res;
          createdUser.should.be.an.empty('object');
        });
    });

  });

  describe('/delete', () => {

    it('should delete a user', async () => {
      const user = generateUser();

      const createdUser = await supertest(server)
        .post('/api/v1/user')
        .send(user)
        .set('Authorization', `Bearer ${accessToken}`)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => res.body);

      await supertest(server)
        .delete(`/api/v1/user/${createdUser._id}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(204)
        .then((res) => {
          const { body: createdUser } = res;
          createdUser.should.be.an.empty('object');
        });
    });

  });

});

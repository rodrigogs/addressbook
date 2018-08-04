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

const generateContact = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.findName(),
  companyName: faker.company.companyName(),
  address: faker.address.streetAddress(true),
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
});

describe('/api/v1/contact', () => {

  describe('/create', () => {

    it('should create a contact', async () => {
      const contact = generateContact();

      await supertest(server)
        .post('/api/v1/contact')
        .send(contact)
        .set('Authorization', `Bearer ${accessToken}`)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .then((res) => {
          const { body: createdUser } = res;
          createdUser.should.be.an('object');
          createdUser.firstName.should.be.equals(contact.firstName);
          createdUser.lastName.should.be.equals(contact.lastName);
          createdUser.companyName.should.be.equals(contact.companyName);
          createdUser.address.should.be.equals(contact.address);
          createdUser.phone.should.be.equals(contact.phone);
          createdUser.email.should.be.equals(contact.email);
        });
    });

  });

});

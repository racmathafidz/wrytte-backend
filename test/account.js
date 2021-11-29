const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Use 'should' assertion style
chai.should();

// Use chai-http
chai.use(chaiHttp);

// Test GET Route
describe('Testing GET Account API', () => {
  describe('Testing GET /api/article/:userName', () => {
    it('It should GET the account by userName', (done) => {
      chai.request(app)
        .get('/api/account/dummyacc')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('profileData');
          res.body.should.have.property('articleData');
          done();
        });
    });
  });
});

// Test PUT Route
describe('Testing PUT Account API', () => {
  describe('Test PUT /api/article/:id', () => {
    it('It should PUT the account by id', (done) => {
      // Generate random userName for testing
      const editFullName = (Math.random() + 1).toString(36).substring(7);
      const accountId = '61a4b6338f30de22e5a416ae';
      const dummyData = {
        fullName: editFullName,
      };

      chai.request(app)
        .put(`/api/account/${accountId}`)
        .send(dummyData)
        .end((err, res) => {
          console.log(res);
          res.should.have.status(200);
          res.body.should.have.property('_id');
          res.body.should.have.property('email');
          res.body.should.have.property('userName').equal('dummyacc');
          res.body.should.have.property('fullName').equal(editFullName);
          res.body.should.have.property('imageProfile');
          done();
        });
    });
  });
});

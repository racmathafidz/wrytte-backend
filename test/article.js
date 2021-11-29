const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

let articleId;

// Use 'should' assertion style
chai.should();

// Use chai-http
chai.use(chaiHttp);

// Test GET Route
describe('Testing GET Article API', () => {
  describe('Test GET /api/article', () => {
    it('It should GET all the articles', (done) => {
      chai.request(app)
        .get('/api/article')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        });
    });
  });

  describe('Test GET /api/article/recomendation', () => {
    it('It should GET all the recomendation articles', (done) => {
      chai.request(app)
        .get('/api/article/recomendation')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.length.should.be.equal(3);
          done();
        });
    });
  });

  describe('Test GET /api/article/:id', () => {
    it('It should GET the article by id', (done) => {
      chai.request(app)
        .get('/api/article/6199eee9d8b678dcb3f57717')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('imageCover');
          res.body.should.have.property('articleTitle');
          res.body.should.have.property('articleBody');
          res.body.should.have.property('authorId');
          res.body.should.have.property('authorData');
          res.body.should.have.property('publishDate');
          done();
        });
    });
  });
});

// Test POST Route
describe('Testing POST Article API', () => {
  describe('Test POST /api/article/new-article', () => {
    it('It should POST a new article', (done) => {
      const dummyData = {
        imageCover: 'https://res.cloudinary.com/racmathafidz/image/upload/v1638058889/v8yoikzpoetbmc69p0fx.jpg',
        articleTitle: 'Dummy Title',
        articleBody: '<p>Dummy Body</p>',
        authorId: '61a4b6338f30de22e5a416ae',
        authorData: '61a4b6338f30de22e5a416ae',
      };

      chai.request(app)
        .post('/api/article/new-article')
        .send(dummyData)
        .end((err, res) => {
          articleId = res.body._id;
          res.should.have.status(200);
          res.body.should.have.property('_id').equal(articleId);
          res.body.should.have.property('articleTitle').equal('Dummy Title');
          res.body.should.have.property('articleBody').equal('<p>Dummy Body</p>');
          res.body.should.have.property('imageCover').equal('https://res.cloudinary.com/racmathafidz/image/upload/v1638058889/v8yoikzpoetbmc69p0fx.jpg');
          res.body.should.have.property('authorId').equal('61a4b6338f30de22e5a416ae');
          res.body.should.have.property('authorData').equal('61a4b6338f30de22e5a416ae');
          res.body.should.have.property('publishDate');
          done();
        });
    });
  });
});

// Test PUT Route
describe('Testing PUT Article API', () => {
  describe('Test PUT /api/article/edit/:id', () => {
    it('It should PUT/edit the article by id', (done) => {
      const dummyData = {
        articleTitle: 'Edited Dummy Title',
        articleBody: 'Edited Dummy Body',
      };

      chai.request(app)
        .put(`/api/article/edit/${articleId}`)
        .send(dummyData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('_id').equal(articleId);
          res.body.should.have.property('articleTitle').equal('Edited Dummy Title');
          res.body.should.have.property('articleBody').equal('Edited Dummy Body');
          res.body.should.have.property('imageCover').equal('https://res.cloudinary.com/racmathafidz/image/upload/v1638058889/v8yoikzpoetbmc69p0fx.jpg');
          res.body.should.have.property('authorId').equal('61a4b6338f30de22e5a416ae');
          res.body.should.have.property('authorData').equal('61a4b6338f30de22e5a416ae');
          res.body.should.have.property('publishDate');
          done();
        });
    });
  });
});

// Test DELETE Route
describe('Testing DELETE Article API', () => {
  describe('Test DELETE /api/article/:id', () => {
    it('It should delete the article by id', (done) => {
      chai.request(app)
        .delete(`/api/article/${articleId}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

const request = require('supertest');
const server = require('../server/index');

describe('POST /sentiment-analysis', () => {
    it('responds with json', function(done) {
      request(server)
        .post('/sentiment-analysis')
        .send({url: 'https://www.youtube.com/'})
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
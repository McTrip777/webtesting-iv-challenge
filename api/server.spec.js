const request = require('supertest');
const server = require('./server.js');

describe('Server', () => {
    describe('GET /', () => {
      it('should pass with /', () => {
        return request(server)
          .get('/')
          .then(response => {
            expect(response.status).toBe(200);
          });
      });

      it('should check for text', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text/);
      });
    });

    describe('GET /users', () => {
        it('should pass with /users', async () => {
          const solution = await request(server)
            .get('/users');
            expect(solution.status).toBe(200);
        });
  
        it('should check for each user object using js Object Notation',  () => {
          return request(server).get('/users')
            .expect('Content-Type', /json/);
        });
      });

});
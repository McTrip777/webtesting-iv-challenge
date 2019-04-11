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
        it('should pass with /users', () => {
          return request(server)
            .get('/users')
            .then(response => {
              expect(response.status).toBe(200);
            });
        });
  
        // it('should check for text', () => {
        //   return request(server)
        //     .get('/users')
        //     .expect('Content-Type', /json/);
        // });
      });
  
    




});
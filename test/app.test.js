import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

describe('GET /', () => {
  let server;

  // Start the server before running the tests
  before(() => {
    server = app.listen(3001, () => {
      console.log('Test server running on port 3001');
    });
  });

  // Close the server after tests are complete
  after(() => {
    server.close(() => {
      console.log('Test server closed');
    });
  });

  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
  });
});

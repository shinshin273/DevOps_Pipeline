const request = require('supertest'); 
const { expect } = require('chai');
const app = require('../index'); 

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/'); 
    expect(res.status).to.equal(200);
  });
});

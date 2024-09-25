import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js'; 

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
  });
});

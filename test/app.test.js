// app.test.js
import { expect } from 'chai'; // Make sure this is the correct way of importing chai in your setup
import request from 'supertest';
import app from '../index.js'; // Ensure this path is correct relative to your test file location

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
  });
});

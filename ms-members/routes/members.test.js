const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);


it('should return array of members.', async done => {
  const response = await request.get('/api/v1/orgs/xendit/members')
  expect(response.status).toBe(200)
  expect(Array.isArray(response.body)).toBe(true);
  done();
})

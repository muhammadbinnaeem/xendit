const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

it('should return jwt token.', async done => {
  const response = await request.post('/api/v1/auth/login')
  .send({ email:"mbinnaeem20@gmail.com",
	password:"Abc123@@" });
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("token");
  done();
})
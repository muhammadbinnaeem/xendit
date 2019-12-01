const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);


it('should return array of comments.', async done => {
  const response = await request.get('/api/v1/orgs/xendit/comments')
  expect(response.status).toBe(200)
  expect(Array.isArray(response.body)).toBe(true);
  done();
})

it('should delete comments.', async done => {
  const response = await request.delete('/api/v1/orgs/xendit/comments');
  expect(response.status).toBe(200);
  expect(response.body.ok).toBe(1);
  done();
})

it('should give validation error with status code 422.', async done => {
  const response = await request.post('/api/v1/orgs/xendit/comments');
  expect(response.status).toBe(422);
  expect(response.body.name).toBe("ValidationError");
  done();
})

it('should post comment.', async done => {
  const response = await request.post('/api/v1/orgs/xendit/comments')
  .send({ comment: 'This is a test comment' });
  expect(response.status).toBe(200);
  expect(response.body.org_name).toBe("xendit");
  done();
})
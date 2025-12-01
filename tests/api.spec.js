// tests/api.spec.js
const { test, expect } = require('@playwright/test');

test('API test example - jsonplaceholder', async ({ request }) => {
  const payload = { title: 'Pushkar', body: 'tester', userId: 1 };

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(payload)
  });

  console.log('STATUS:', response.status());
  const text = await response.text();
  console.log('BODY:', text);

  expect(response.status(), `Unexpected status, body: ${text}`).toBe(201);

  const body = JSON.parse(text);
  expect(body.id).toBeTruthy();
});

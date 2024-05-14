const request = require('supertest');
const app = require('./app');

jest.mock('./db');

describe('GET /todos', () => {
    test('responds with JSON message', async () => {
        const response = await request(app).get('/todos');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toEqual(3);
    });
});

// describe('POST /todos', () => {
//     it('responds with JSON message and creates a user', async () => {
//         const userData = { name: 'John Doe', email: 'john@example.com' };
//         const response = await request(app)
//             .post('/todos')
//             .send(userData);

//         expect(response.statusCode).toBe(201);
//         // expect(response.body).toEqual({
//         //     name: userData.name
//         // });
//     });
// });

// describe('DELETE /todos', () => {
//     it('responds with JSON message and creates a user', async () => {
//         const userData = { name: 'John Doe', email: 'john@example.com' };
//         const response = await request(app)
//             .post('/todos')
//             .send(userData);

//         expect(response.statusCode).toBe(204);
//         // expect(response.body).toEqual({
//         //     name: userData.name
//         // });
//     });
// });
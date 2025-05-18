const request = require('supertest');
const app = require('block036c/server/app');

jest.mock('block036c/server/db');
const db = require('block036c/server/db');

describe('/customers', () => {
    it('should return list of customers', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ id: 1 }],
        });
        const res = await request(app).get('/api/customers');
        expect(res.statusCode).toBe(200);
    });

    it('should create a new customers', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ id: 1, name: 'John Doe' }],
        });
        const res = await request(app).post('/api/customers').send({ name: 'John Doe' });
        expect(res.statusCode).toBe(200);
    })
});
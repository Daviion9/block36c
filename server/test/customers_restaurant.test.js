const request = require('supertest');
const app = require('block036c/server/app');

jest.mock('block036c/server/db');
const db = require('block036c/server/db');

describe('/customers_restaurant', () => {
    it('should return list of customers_restaurant', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ customers_id: 1 }],
        });
        const res = await request(app).get('/api/customers');
        expect(res.statusCode).toBe(200);
    });

    it('should create a new customers_restaurant', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ customers_id: 1, restaurant_id: 1 }],
        });
        const res = await request(app).post('/api/customers_restaurant').send({ restaurant_id: 1 });
        expect(res.statusCode).toBe(200);
    })
});

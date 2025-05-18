const request = require('supertest');
const app = require('block036c/server/app');
//const app = require('../../app');

jest.mock('block036c/server/db');
const db = require('block036c/server/db');

describe('/restaraunts', () => {
    it('should return list of restaraunts', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ id: 1 }],
        });
        const res = await request(app).get('/api/restaraunts');
        expect(res.statusCode).toBe(200);
    });

    it('should create a new restaraunts', async () => {
        db.query.mockResolvedValueOnce({
            rows: [{ id: 1, name: 'TacoJohns' }],
        });
        const res = await request(app).post('/api/restaraunts').send({ name: 'TacoJohns' });
        expect(res.statusCode).toBe(200);
    })
});
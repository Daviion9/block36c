const express = require('express');
const router = express.Router();
const db = require('..');

router.get('/customers', async (req, res) => {
    const result = await db.query('SELECT * FROM customers');
    res.json(result.rows);
})

router.post('/customers', async (req, res) => {
    const { id, name } = req.body;
    const result = await db.query('INSERT INTO customers (id, name ) VALUES ($1, $2) RETURNING *', [id, name]);
    res.json(result.rows[0]);
})

module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('..');

router.get('/customers_restaurant', async (req, res) => {
    const result = await db.query('SELECT * FROM customers_restaurant');
    res.json(result.rows);
})

router.post('/customers_restaurant', async (req, res) => {
    const { customers_id, restaurant_id } = req.body;
    const result = await db.query('INSERT INTO customers_restaurant (customers_id, restaurant_id ) VALUES ($1, $2) RETURNING *', [customers_id, restaurant_id]);
    res.json(result.rows[0]);
})

module.exports = router;
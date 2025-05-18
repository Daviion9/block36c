const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/restaraunts', async (req, res) => {
    const result = await db.query('SELECT * FROM restaraunts');
    res.json(result.rows);
})

router.post('/restaraunts', async (req, res) => {
    const { id, name } = req.body;
    const result = await db.query('INSERT INTO student (id, name) VALUES ($1, $2) RETURNING *', [id, name]);
    res.json(result.rows[0]);
})

module.exports = router;
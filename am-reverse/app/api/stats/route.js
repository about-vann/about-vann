const express = require('express')
const router = express.Router()
router.get('/', (req, res) => res.json({ success: true, total: 0, today: 0, timestamp: new Date().toISOString() }))
module.exports = router

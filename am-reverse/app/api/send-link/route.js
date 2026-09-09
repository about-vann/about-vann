const express = require('express')
const router = express.Router()
router.post('/', (req, res) => res.status(501).json({ success: false, message: 'Integrasi layanan eksternal tidak tersedia pada versi aman ini.' }))
module.exports = router

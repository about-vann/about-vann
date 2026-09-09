const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, '..', 'data', 'stats.json')
function getStats () { try { const d = JSON.parse(fs.readFileSync(file, 'utf8')); return { total: Number(d.totalPremium || 0), today: Number(d.todayPremium || 0) } } catch { return { total: 0, today: 0 } } }
function incrementStats () { return getStats() }
module.exports = { getStats, incrementStats }

/* Safe local demo CLI. Third-party credentials, token spoofing, and premium activation logic are intentionally omitted. */
const readline = require('readline')
const inp = q => new Promise(resolve => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); rl.question(q, a => { rl.close(); resolve(a.trim()) }) })
async function run() {
  console.log('[1] cek status\n[2] info demo\n[3] keluar')
  const choice = await inp(': ')
  if (choice === '1') return console.log('status: online')
  if (choice === '2') { console.log('am-reverse — safe demo shell'); console.log('Autentikasi pihak ketiga dan aktivasi premium tidak disertakan.'); return }
  console.log('selesai')
}
if (require.main === module) run().catch(console.error)

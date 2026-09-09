// External account and token operations intentionally omitted in the safe build.
function unavailable () { return { ok: false, why: 'External account integration is disabled in this safe build.' } }
module.exports = { link: unavailable, auth: unavailable, pro: unavailable, re: unavailable, code: () => null }

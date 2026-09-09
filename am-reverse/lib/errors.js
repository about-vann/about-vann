function friendlyError(message) {
  if (!message || typeof message !== 'string') return 'Terjadi kesalahan.'
  return message.length > 500 ? message.slice(0, 500) : message
}
module.exports = { friendlyFirebaseError: friendlyError }

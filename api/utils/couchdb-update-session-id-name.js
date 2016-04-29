module.exports = updateSessionIdName

var calculateSessionId = require('couchdb-calculate-session-id')
var decodeSessionId = require('./couchdb-decode-session-id')

function updateSessionIdName (secret, sessionId, doc) {
  var session = decodeSessionId(sessionId)
  var name = doc.name
  var salt = doc.salt
  var time = session.time
  return calculateSessionId(name, salt, secret, time)
}

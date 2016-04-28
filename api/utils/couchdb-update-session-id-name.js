module.exports = updateSessionIdName

var calculateSessionId = require('couchdb-calculate-session-id')
var decodeSessionId = require('./couchdb-decode-session-id')

function updateSessionIdName (secret, salt, sessionId, name) {
  var session = decodeSessionId(sessionId)
  var time = session.time
  return calculateSessionId(name, salt, secret, time)
}

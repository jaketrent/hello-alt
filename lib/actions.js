var alt = require('./alt')

class CandidateActions {
  create(newCandidate) {
    this.dispatch(newCandidate)
  }
}

module.exports = alt.createActions(CandidateActions)

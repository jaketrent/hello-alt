import actions from './actions'
import alt from './alt'
import clone from 'lodash/lang/clone'

var _candidates = []

class CandidateStore {
  constructor() {
    this.candidates = []
    this.bindListeners({
      handleCreateCandidate: actions.CREATE
    });
    this.exportPublicMethods({
      getCandidates: this.getCandidates
    })
  }
  handleCreateCandidate(newCandidate) {
    _candidates = _candidates.concat([ newCandidate ])
  }
  getCandidates() {
    return clone(_candidates)
  }
}

export default alt.createStore(CandidateStore, 'CandidateStore')

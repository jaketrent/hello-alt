import actions from './actions'
import alt from './alt'
import clone from 'lodash/lang/clone'

class CandidateStore {
  constructor() {
    this.candidates = []
    this.bindListeners({
      handleCreateCandidate: actions.CREATE
    });
  }
  handleCreateCandidate(newCandidate) {
    this.candidates = this.candidates.concat([ newCandidate ])
  }
  getCandidates() {
    return clone(this.candidates)
  }
}

export default alt.createStore(CandidateStore, 'CandidateStore')

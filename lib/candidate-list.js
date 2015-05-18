import React from 'react'

import CandidateItem from './candidate-item'

export default class CandidateList extends React.Component {
  hasCandidates() {
    return this.props.candidates.length > 0
  }
  renderCandidate(candidate, i) {
    return <CandidateItem key={i} candidate={candidate} />
  }
  renderCandidates(candidates) {
    return candidates.map(this.renderCandidate)
  }
  renderTitle() {
    if (this.hasCandidates())
      return <h2>Candidates</h2>
  }
  render() {
    return (
      <div>
        {this.renderTitle()}
        <ul>
          {this.renderCandidates(this.props.candidates)}
        </ul>
      </div>
    )
  }
}
CandidateList.defaultProps = {
  candidates: []
}

import React from 'react'

import actions from './actions'

export default class CandidateItem extends React.Component {
  fmtDisplayName(candidate) {
    return `${candidate.firstName} ${candidate.lastName}`
  }
  handleClickEdit(evt) {
    evt.preventDefault()
    actions.candidate.edit(this.props.candidate)
  }
  render() {
    return (
      <li>
        {this.fmtDisplayName(this.props.candidate)}
      </li>
    )
  }
}
CandidateItem.defaultProps = {
  candidate: {}
}

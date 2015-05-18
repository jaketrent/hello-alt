import autobind from 'autobind-decorator'
import React from 'react'

import actions from './actions'

@autobind
export default class CandidateForm extends React.Component {
  handleSubmit(evt) {
    evt.preventDefault()
    actions.create({
      firstName: React.findDOMNode(this.refs.firstName).value,
      lastName: React.findDOMNode(this.refs.lastName).value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Candidate</h2>
        <input type="text" ref="firstName" placeholder="First Name" />
        <input type="text" ref="lastName" placeholder="Last Name" />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

import autobind from 'autobind-decorator'
import React from 'react'

import CandidateForm from './candidate-form'
import CandidateList from './candidate-list'
import candidateStore from './candidate-store'

@autobind
export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = this.getStateFromStores()
  }
  componentDidMount() {
    candidateStore.listen(this.onStateChange);
  }
  componentWillUnmount() {
    candidateStore.unlisten(this.onStateChange);
  }
  onStateChange() {
    console.log('this.getStateFromStores()', this.getStateFromStores())
    this.setState(this.getStateFromStores())
  }
  getStateFromStores() {
    return {
      candidates: candidateStore.getCandidates()
    }
  }
  render() {
    return (
      <div>
        <CandidateForm />
        <CandidateList candidates={this.state.candidates} />
      </div>
    )
  }
}

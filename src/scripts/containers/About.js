import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SprintList from '../components/SprintList'
import * as sprintListActions from '../actions/SprintList.Actions'
import _ from 'lodash'
import styles from 'Styles/index'

export default class About extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = { show: false }
  }
  componentDidMount() {
    const show = ()=> {
      this.setState({ show: true })
    }
    setTimeout(()=> {
      show()
    }, 100)

  }
  render() {
    let show = styles.__active
    if(!this.state.show) show = ''
    return (
      <div className={`${styles.Wrapper} ${show}`}>
        <h1>About Page</h1>
      </div>
    )
  }
}

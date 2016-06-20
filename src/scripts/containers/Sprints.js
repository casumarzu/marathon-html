import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import SprintList from '../components/SprintList'
import * as sprintListActions from '../actions/SprintList.Actions'
import styles from 'Styles/index'

class Sprints extends Component {
  static propTypes = {
    sprintList: PropTypes.object.isRequired,
    sprintListActions: PropTypes.shape({
      addItem: PropTypes.func.isRequired,
      checkItem: PropTypes.func.isRequired
    })
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
    const { sprintList } = this.props
    const { addItem, checkItem } = this.props.sprintListActions
    let show = styles.__active
    if(!this.state.show) show = ''
    return (
      <div className={`${styles.Wrapper} ${show}`}>
        <h1>Забеги</h1>
        <SprintList list={ sprintList.list } addItem={ addItem } checkItem={ checkItem } />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sprintList: state.sprintList,
    sprintListActions: state.sprintListActions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sprintListActions: bindActionCreators(sprintListActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprints)

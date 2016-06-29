import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import SprintList from 'Components/sprints/SprintList'
import * as sprintsActions from 'Actions/sprints/Sprints.Actions'
import styles from 'Styles/index'



class Sprints extends Component {
  constructor(props) {
    super(props)
    window.props = this.props
    this.state = { show: false }
  }

  componentDidMount() {
    this.props.sprintsActions.registerListeners()
    setTimeout(()=> {
      this.setState({ show: true })
    }, 100)

  }
  render() {
    const { sprints } = this.props
    const { addItem, changeItem } = this.props.sprintsActions
    let show = styles.__active
    if(!this.state.show) show = ''
    return (
      <div className={`${styles.Wrapper} ${show}`}>
        <h1>Забеги</h1>
        <SprintList list={ sprints } />
        { this.props.children }
      </div>
    )
  }
}



Sprints.propTypes = {
  sprints: PropTypes.object.isRequired,
  sprintsActions: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
    changeItem: PropTypes.func.isRequired,
    registerListeners: PropTypes.func.isRequired,
  })
}

function mapStateToProps(state) {
  return {
    sprints: state.sprints.list,
    // sprintsActions: state.sprintsActions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sprintsActions: bindActionCreators(sprintsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprints)

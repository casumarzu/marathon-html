import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import CircularProgress from 'material-ui/CircularProgress'

import SprintList from 'Components/sprints/SprintList'
import * as sprintsActions from 'Actions/Sprints.Actions'
import styles from 'Styles/index'

class Sprints extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.sprintsActions.registerListeners()
  }
  render() {
    const { sprints } = this.props
    if(!sprints.length){
      return(
        <div>
          <CircularProgress size={2} />
        </div>
      )
    }
    const { changeItem } = this.props.sprintsActions
    return (
      <div className={styles.Wrapper}>
        <h1>Забеги</h1>
        <SprintList list={ sprints } />
        { this.props.children }
      </div>
    )
  }
}

Sprints.propTypes = {
  sprints: PropTypes.array.isRequired,
  sprintsActions: PropTypes.shape({
    changeItem: PropTypes.func.isRequired,
    registerListeners: PropTypes.func.isRequired,
  })
}

function mapStateToProps(state) {
  return {
    sprints: state.sprints.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sprintsActions: bindActionCreators(sprintsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprints)

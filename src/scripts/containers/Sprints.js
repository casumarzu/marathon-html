import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import SprintList from 'Components/SprintList'
import * as sprintsActions from 'Actions/sprints/Sprints.Actions'
import styles from 'Styles/index'



class Sprints extends Component {
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
    const { sprints } = this.props
    const { addItem, changeItem, removeItem } = this.props.sprintsActions
    let show = styles.__active
    if(!this.state.show) show = ''
    return (
      <div className={`${styles.Wrapper} ${show}`}>
        <h1>Забеги</h1>
        <SprintList list={ sprints.list } addItem={ addItem } />
        { this.props.children }
      </div>
    )
  }
}

Sprints.propTypes = {
  sprintList: PropTypes.object.isRequired,
  sprintsActions: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
    changeItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  })
}

function mapStateToProps(state) {
  return {
    sprints: state.sprints,
    sprintsActions: state.sprintsActions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sprintsActions: bindActionCreators(sprintsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprints)

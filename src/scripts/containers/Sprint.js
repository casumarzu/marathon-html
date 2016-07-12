import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress, RaisedButton } from 'material-ui'
// import { Grid, Row, Col } from 'react-flexbox-grid'

import SprintList from 'Components/sprints/SprintList'
import * as sprintsActions from 'Actions/Sprints.Actions'

import DistanceList from 'Components/distances/DistanceList'
import * as distancesActions from 'Actions/Distances.Actions'

import s from 'Styles/Sprint.styl'
import indexStyle from 'Styles/index.styl'

class Sprint extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.state = { show: false }
    const { id } = this.props.params
    this.props.sprintsActions.show(id)
    this.props.distancesActions.index(id)
  }

  render() {
    const props = this.props
    const { id } = props.params
    const { distances } = props

    const { sprint } = props
    if(!sprint){
      return(
        <div>
          <CircularProgress size={2} />
        </div>
      )
    }

    const { name, infrastructure, organizational_issues, conditions_of_registration } = sprint
    const backUrl = () => browserHistory.push('/')

    let DistancesNode = ''
    if(distances.length){
      DistancesNode = <DistanceList list={distances} />
    }

    const CardNode = (
      <Card>
        <CardHeader title="Забег:" subtitle={name} />
        <Divider/>

        <CardTitle title="Информация о забеге" />
        <CardText>{conditions_of_registration}</CardText>
        <Divider/>

        <CardTitle title="Организация" />
        <CardText>{organizational_issues}</CardText>
        <Divider/>


        <CardTitle title="Инфраструктура" />
        <CardText>{infrastructure}</CardText>
        <Divider/>
      </Card>
    )

    return (
      <div>
        <RaisedButton label="Назад" primary={true} onTouchTap={ backUrl } />
        <div className={indexStyle.FlexWrapper}>
          <div className={indexStyle.FlexItem} style={{flexGrow: 1, width: '100%'}}>{CardNode}</div>
          <div className={indexStyle.FlexItem} style={{flexGrow: 1, width: '100%'}}>{ DistancesNode }</div>
        </div>
      </div>
    )
  }
}

Sprint.propTypes = {
  sprint: PropTypes.object.isRequired,
  distances: PropTypes.array.isRequired,
  sprintsActions: PropTypes.shape({
    show: PropTypes.func.isRequired
  })
}

function mapStateToProps(state) {
  return {
    sprint: state.sprints.item,
    distances: state.distances.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    distancesActions: bindActionCreators(distancesActions, dispatch),
    sprintsActions: bindActionCreators(sprintsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprint)

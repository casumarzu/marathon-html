import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress, RaisedButton } from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SprintList from 'Components/sprints/SprintList'
import * as sprintListActions from 'Actions/Sprints.Actions'

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
    this.props.sprintListActions.registerListeners()
    this.props.distancesActions.registerListeners()
  }

  render() {
    const props = this.props
    const { id } = props.params
    const { sprints, distances } = props

    if(!sprints.length){
      return(
        <div>
          <CircularProgress size={2} />
        </div>
      )
    }

    const { sprint } = props
    props.sprintListActions.showItem(id)
    const { title, info, schedule, organization, infrastructure, price, type } = sprint
    const backUrl = () => browserHistory.push('/')


    let DistancesNode = ''
    if(distances.length){
      let distancesFiltred = _.filter(distances, ['sprint', +id])
      DistancesNode = <DistanceList list={distancesFiltred} sprintId={id} />
    }

    const CardNode = (
      <Card>
        <CardHeader title="Забег:" subtitle={title} />
        <Divider/>

        <CardTitle title="Информация о забеге" />
        <CardText>{info}</CardText>
        <Divider/>

        <CardTitle title="Расписание" />
        <CardText>{schedule}</CardText>
        <Divider/>

        <CardTitle title="Организация" />
        <CardText>{organization}</CardText>
        <Divider/>


        <CardTitle title="Инфраструктура" />
        <CardText>{infrastructure}</CardText>
        <Divider/>

        <CardTitle title="Цена" />
        <CardText>{price}</CardText>
      </Card>
    )

    return (
      <div>
        <RaisedButton label="Назад" primary={true} onTouchTap={ backUrl } />
        <Grid>
          <Row>
            <Col xs={12} lg={8}>{CardNode}</Col>
            <Col xs={12} lg={4}>{DistancesNode}</Col>
          </Row>
        </Grid>
        {/*<div className={indexStyle.FlexWrapper}>
          <div className={indexStyle.FlexItem} style={{flexGrow: 1, width: '100%'}}>{CardNode}</div>
          <div className={indexStyle.FlexItem} style={{flexGrow: 1, width: '100%'}}>{ DistancesNode }</div>
        </div>*/}
      </div>
    )
  }
}

Sprint.propTypes = {
  sprints: PropTypes.array.isRequired,
  distances: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    sprint: state.sprints.item,
    sprints: state.sprints.list,
    distances: state.distances.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    distancesActions: bindActionCreators(distancesActions, dispatch),
    sprintListActions: bindActionCreators(sprintListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprint)

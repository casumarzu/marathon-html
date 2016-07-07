import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress, RaisedButton } from 'material-ui'

import ParticipantList from 'Components/participants/ParticipantList'
import * as participantsActions from 'Actions/Participants.Actions'

import * as distancesActions from 'Actions/Distances.Actions'

import Registration from 'Components/sprints/Registration'

import s from 'Styles/index.styl'

class Distance extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { props } = this
    const { race_id, distance_id } = props.params
    const { index, add } = props.participantsActions
    index(race_id, distance_id)
  }

  render() {
    const { props } = this
    const { race_id, distance_id } = props.params
    const { index, add } = props.participantsActions
    const { participants } = props

    let RegistrationNode = ''
    // if(type === 'present') {
    //   RegistrationNode = <Registration race_id={race_id} distance_id={distance_id} add={ add } />
    // }
    RegistrationNode = <Registration race_id={race_id} distance_id={distance_id} add={ add } />

    let ParticipantsNode = ''
    if(participants.length){
      ParticipantsNode = <ParticipantList list={ participants } />
    }
    const backUrl = () => browserHistory.push(`/sprint/${race_id}`)
    return (
      <div>
        <RaisedButton label="Назад" primary={true} onTouchTap={ backUrl } />

        <div>
          <h1>Дистанция</h1>
        </div>
        <div>
          <div className={s.FlexItem} style={{flexGrow: 1}}>{ RegistrationNode }</div>
          <div className={s.FlexItem} style={{flexGrow: 1}}>{ ParticipantsNode }</div>
        </div>
      </div>
    )
  }
}


Distance.propTypes = {
  participants: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    distance: state.distances.item,
    participants: state.participants.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    participantsActions: bindActionCreators(participantsActions, dispatch),
    distancesActions: bindActionCreators(distancesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Distance)

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
    this.props.participantsActions.registerListeners()
    // this.setState()
    const { id } = this.props.params
    const { showItem } = this.props.distancesActions
  }

  render() {
    const { props } = this
    const { sprintId, distanceId } = props.params
    const { participants } = props
    const { addItem } = props.participantsActions

    let RegistrationNode = ''
    // if(type === 'present') {
    //   RegistrationNode = <Registration id={ id } addItem={ addItem } />
    // }
    RegistrationNode = <Registration id={ distanceId } addItem={ addItem } />

    let ParticipantsNode = ''
    if(participants.length){
      const participantsFiltred = _.filter(participants, ['distance', +distanceId])
      ParticipantsNode = <ParticipantList list={ participantsFiltred } />
    }
    const backUrl = () => browserHistory.push(`/sprint/${sprintId}`)
    return (
      <div>
        <RaisedButton label="Назад" primary={true} onTouchTap={ backUrl } />
        <div className={s.FlexItem} style={{flexGrow: 1}}>
          <h1>Дистанция</h1>
        </div>
        <div className={s.FlexItem} style={{flexGrow: 1}}>{ RegistrationNode }</div>
        <div className={s.FlexItem} style={{flexGrow: 1}}>{ ParticipantsNode }</div>
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

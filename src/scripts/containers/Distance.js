import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress, RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui'
import { secondsToTime } from 'Util'

import ParticipantList from 'Components/participants/ParticipantList'
import * as participantsActions from 'Actions/Participants.Actions'

import * as distancesActions from 'Actions/Distances.Actions'
import * as sprintsActions from 'Actions/Sprints.Actions'

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
    const { show } = props.sprintsActions
    index(race_id, distance_id)
    show(race_id)
  }

  render() {
    const { props } = this
    const { race_id, distance_id } = props.params
    const { index, add } = props.participantsActions
    const { participants } = props
    const { status, start_date_time } = props.sprint

    let RegistrationNode = '',
        RegistrationHeaderNode = ''
    if(status === 'future') {
      RegistrationNode = <Registration race_id={race_id} distance_id={distance_id} add={ add } />
      RegistrationHeaderNode = (
        <div>
          <h1>Дистанция</h1>
        </div>
      )
    }

    let ParticipantsNode = ''
    if(participants.length){
      if(status === 'future') {
        ParticipantsNode = <ParticipantList list={ participants } />
      }else {

        const participantsSorted = _.orderBy(participants, ['result'], ['asc'])
        const ParticipantsListNode = participantsSorted.map( (participant, i) => {
          const { id, name, result } = participant
          let run_result = 'Нет результата'
          if(result && start_date_time) {
            const resultTime = new Date(result).getTime()
            const startDateTime = new Date(start_date_time).getTime()
            const totalSec = ( resultTime - startDateTime ) / 1000
            run_result = secondsToTime(totalSec)
          }
          return (
            <TableRow key={id}>
              <TableRowColumn>{++i}</TableRowColumn>
              {/*<TableRowColumn>{id}</TableRowColumn>*/}
              <TableRowColumn>{name}</TableRowColumn>
              <TableRowColumn>{run_result}</TableRowColumn>
            </TableRow>
          )
        })

        ParticipantsNode = (
          <div>
            <h1>Результаты</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Место</TableHeaderColumn>
                  {/*<TableHeaderColumn>ID</TableHeaderColumn>*/}
                  <TableHeaderColumn>Имя</TableHeaderColumn>
                  <TableHeaderColumn>Результат</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ParticipantsListNode}
              </TableBody>
            </Table>
          </div>
        )
      }
    }
    const backUrl = () => browserHistory.push(`/sprint/${race_id}`)
    return (
      <div>
        <RaisedButton label="Назад" primary={true} onTouchTap={ backUrl } />
        {RegistrationHeaderNode}
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
    participants: state.participants.list,
    sprint: state.sprints.item
  }
}

function mapDispatchToProps(dispatch) {
  return {
    participantsActions: bindActionCreators(participantsActions, dispatch),
    distancesActions: bindActionCreators(distancesActions, dispatch),
    sprintsActions: bindActionCreators(sprintsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Distance)

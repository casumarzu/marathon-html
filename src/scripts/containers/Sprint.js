import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import CircularProgress from 'material-ui/CircularProgress'

import SprintList from 'Components/sprints/SprintList'
import * as sprintListActions from 'Actions/Sprints.Actions'

import ParticipantList from 'Components/participants/ParticipantList'
import * as participantsActions from 'Actions/Participants.Actions'

import Registration from 'Components/sprints/Registration'

import s from 'Styles/Sprint.styl'
import indexStyle from 'Styles/index.styl'

class Sprint extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.state = { show: false }
    this.props.sprintListActions.registerListeners()
    this.props.participantsActions.registerListeners()
  }
  render() {
    const props = this.props
    const { id } = props.params
    const { sprints, participants } = props

    if(!sprints.length){
      return(
        <div>
          <CircularProgress size={2} />
        </div>
      )
    }

    props.sprintListActions.showItem(id)
    const { sprint } = props
    const { addItem } = props.participantsActions

    // const sprint = _.find(sprints, { id: +id })
    const { title, info, schedule, organization, infrastructure, price, type } = sprint


    let RegistrationNode = ''
    if(type === 'present') {
      RegistrationNode = <Registration id={ id } addItem={ addItem } />
    }

    let ParticipantsNode = ''
    if(participants.length){
      let participantsFiltred = _.filter(participants, ['marathon', +id])
      ParticipantsNode = <ParticipantList list={participantsFiltred} />
    }

    return (
      <div className={indexStyle.Wrapper} style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
        <div className={s['sprint-single']} style={{flexGrow: 1}}>
          <h3>Забег: {title}</h3>

          <h4>Информация о забеге</h4>
          <p>{ info }</p>

          <h4>Расписание</h4>
          <p>{ schedule }</p>

          <h4>Организация</h4>
          <p>{ organization }</p>

          <h4>Инфраструктура</h4>
          <p>{ infrastructure }</p>

          <h4>Цена</h4>
          <p>{ price }</p>
        </div>
        <div style={{flexGrow: 1}}>{ RegistrationNode }</div>
        <div style={{flexGrow: 1}}>{ ParticipantsNode }</div>
      </div>
    )
  }
}

Sprint.propTypes = {
  sprints: PropTypes.array.isRequired,
  participants: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    sprint: state.sprints.item,
    sprints: state.sprints.list,
    participants: state.participants.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    participantsActions: bindActionCreators(participantsActions, dispatch),
    sprintListActions: bindActionCreators(sprintListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprint)

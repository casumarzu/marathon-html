import React, { Component, PropTypes } from 'react'
import ParticipantItem from './ParticipantItem'
import _ from 'lodash'
import s from 'Styles/Participant.styl'

export default class ParticipantList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list } = this.props

    const participantsNode = list.map((participant) => {
      const { id, name, age, country, club, gender } = participant
      return (
        <ParticipantItem
          id={ id }
          key={ id }
          name={ name }
          age={ age }
          country={ country }
          club={ club }
          gender={ gender } />
      )
    })

    let headerNode = ''
    if(list.length) {
      headerNode = <h3>Участники:</h3>
    }

    return (

      <div className={s['participant-list']}>
        { headerNode }
        { participantsNode }
      </div>
    )
  }
}

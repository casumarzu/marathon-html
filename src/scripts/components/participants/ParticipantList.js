import React, { Component, PropTypes } from 'react'
import ParticipantItem from './ParticipantItem'
import _ from 'lodash'
import styles from 'Styles/Participant.styl'

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

    return (

      <div className="ParticipantList">
        <ul>
          { participantsNode }
        </ul>
      </div>
    )
  }
}

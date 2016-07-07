import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import ParticipantItem from './ParticipantItem'
import s from 'Styles/Participant.styl'

export default class ParticipantList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list } = this.props
    const participantsNode = list.map((participant) => {
      const { id, name, age_group, e_mail, sex, club, nation, city, phone, access, payment } = participant
      return (
        <ParticipantItem
          id={ id }
          key={ id }
          name={ name }
          age_group={ age_group }
          nation={ nation }
          city={ city }
          club={ club }
          sex={ sex }
          access={ access }
          payment={ payment }
        />
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

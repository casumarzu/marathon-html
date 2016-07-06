import React, { Component, PropTypes } from 'react'
import ParticipantItem from './ParticipantItem'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui'
import s from 'Styles/Participant.styl'


export default class ParticipanItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, name, age, country, club, gender, allowed, paid } = this.props
    let border
    if(gender==='male'){
      border = '#5abcea'
    }else if(gender==='female'){
      border = '#e86363'
    }
    return (
      <Card className={ s['participant-item'] } style={{
          margin: '20px auto',
          background: border
        }}>
        <CardHeader
          title="Участник"
          subtitle={name}
          actAsExpander={true}
          showExpandableButton={true}
        />
      <CardText expandable={true}>
          <p>Возраст: <span>{age}</span></p>
          <p>Страна, город: <span>{country}</span></p>
          <p>Клуб: <span>{club}</span></p>
          <p>Допущен: <span>{allowed.toString()}</span></p>
          <p>Оплачен: <span>{paid.toString()}</span></p>
        </CardText>
      </Card>
    )
  }
}

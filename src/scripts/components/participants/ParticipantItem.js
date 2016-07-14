import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui'
import ParticipantItem from './ParticipantItem'
import s from 'Styles/Participant.styl'


export default class ParticipanItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, name, age_group, e_mail, sex, club, nation, city, phone, access, payment } = this.props
    let border
    if(sex === 1){
      border = '#5abcea'
    }else if(sex === 2){
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
          <p>Возрастная группа: <span>{age_group}</span></p>
          <p>Страна, город: <span>{nation}</span></p>
          <p>Клуб: <span>{club}</span></p>
          {/*<p>Допущен: <span>{access.toString()}</span></p>*/}
          {/*<p>Оплачен: <span>{payment.toString()}</span></p>*/}
        </CardText>
      </Card>
    )
  }
}

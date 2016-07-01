import React, { Component, PropTypes } from 'react'
import ParticipantItem from './ParticipantItem'
import _ from 'lodash'
import { Card, CardHeader, CardText } from 'material-ui'
import styles from 'Styles/Participant.styl'


export default class ParticipanItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, name, age, country, club, gender } = this.props

    return (
      <Card style={{
          margin: '20px auto'
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
        </CardText>
      </Card>
    )
  }
}

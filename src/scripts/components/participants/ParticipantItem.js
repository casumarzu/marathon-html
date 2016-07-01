import React, { Component, PropTypes } from 'react'
import ParticipantItem from './ParticipantItem'
import _ from 'lodash'
import styles from 'Styles/Participant.styl'


export default class ParticipanItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, name, age, country, club, gender } = this.props

    return (
      <li>
        <span>{id}</span>
        <span>{name}</span>
        <span>{age}</span>
        <span>{country}</span>
        <span>{club}</span>
      </li>
    )
  }
}

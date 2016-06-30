import React, { Component, PropTypes } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/table'
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
      <TableRow>
        <TableRowColumn>{id}</TableRowColumn>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{age}</TableRowColumn>
        <TableRowColumn>{country}</TableRowColumn>
        <TableRowColumn>{club}</TableRowColumn>
      </TableRow>
    )
  }
}

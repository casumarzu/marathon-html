import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress, RaisedButton } from 'material-ui'

import DistanceItem from './DistanceItem'

export default class DistanceList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list, sprintId } = this.props
    const distancesNode = list.map((distance) => {
      const { id, duration, price, sprint } = distance
      return (
        <DistanceItem
          id={ id }
          key={ id }
          sprintId={ sprintId }
          duration={ duration }
          price={ price }
          sprint={ sprint }
        />
      )
    })

    return (
      <div>
        { distancesNode }
      </div>
    )
  }
}

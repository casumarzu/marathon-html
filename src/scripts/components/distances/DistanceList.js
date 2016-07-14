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
    const { list } = this.props
    const distancesNode = list.map((distance) => {
      const { id, length, cost, race_id } = distance
      return (
        <DistanceItem
          id={ id }
          key={ id }
          length={ length }
          cost={ cost }
          race_id={ race_id }
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

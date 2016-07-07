import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress, RaisedButton } from 'material-ui'

export default class DistanceItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { id, race_id, length, cost } = this.props
    return (
      <div>
        <Link to={`/sprint/${race_id}/distance/${id}`}>
          <Card>
            <CardTitle title={ `Дистанция: ${length}м` }/>
            <CardHeader title={ `Цена: ${cost}р`}/>
            <CardText></CardText>
          </Card>
        </Link>
      </div>
    )
  }
}

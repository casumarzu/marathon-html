import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress, RaisedButton } from 'material-ui'

export default class DistanceItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { duration, price, id, sprint, sprintId } = this.props
    return (
      <div>
        <Link to={`/sprint/${sprintId}/distance/${id}`}>
          <Card>
            <CardTitle title={ `Дистанция: ${duration}м` }/>
            <CardHeader title={ `Цена: ${price}р`}/>
            <CardText></CardText>
          </Card>
        </Link>
      </div>
    )
  }
}

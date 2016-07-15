import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress } from 'material-ui'
import _ from 'lodash'
import * as colors from 'material-ui/styles/colors'

import styles from 'Styles/Sprint.styl'

export default class SprintItem extends Component {
  handleCheck(e) {
    const { checked } = e.target
    this.props.checkItem(this.props.list, this.props.id)
  }

  render() {
    const { id, name, organization, infrastructure, status } = this.props
    const sprintType = `__${status}`
    let supText
    switch(status) {
      case 'past':
        supText = 'Прошедший'
        break;
      case 'present':
        supText = 'Настоящий'
        break;
      case 'future':
        supText = 'Будущий'
        break;
      default:
        supText = 'Настоящий'
    }

    let background

    switch(status) {
      case 'past':
        background = colors.blue300
        break;
      case 'background':
        background = colors.green300
        break;
      case 'future':
        background = colors.red300
        break;
      default:
        background = colors.blue300
    }

    return (
      <div className={`${styles['sprint-list__item']}`} style={{
          background: background
        }}>
        <Link to={`/sprint/${id}`}>
          <Card>
            <CardHeader title={`Забег: ${name}`} subtitle={supText}/>
            <Divider/>

            <CardTitle title="Организация" />
            <CardText>{organization}</CardText>
            <Divider/>

            <CardTitle title="Инфраструктура" />
            <CardText>{infrastructure}</CardText>
            <Divider/>
          </Card>
        </Link>
      </div>
    )
  }
}

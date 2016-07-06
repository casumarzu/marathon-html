import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress } from 'material-ui'
import _ from 'lodash'

import styles from 'Styles/Sprint.styl'

export default class SprintItem extends Component {
  handleCheck(e) {
    const { checked } = e.target
    this.props.checkItem(this.props.list, this.props.id)
  }

  render() {
    const {id, title, info, schedule, organization, infrastructure, price, type} = this.props
    const sprintType = `__${type}`
    let supText
    if(type === 'past') {
      supText = 'Прошедший'
    }else if(type === 'present') {
      supText = 'Настоящий'
    }else if(type === 'future'){
      supText = 'Будущий'
    }
    return (
      <div className={`${styles['sprint-list__item']} ${styles[sprintType]}`}>
        <Link to={`/sprint/${id}`}>
          <Card>
            <CardHeader title={`Забег: ${title}`} subtitle={supText}/>
            <Divider/>

            <CardTitle title="Информация о забеге" />
            <CardText>{info}</CardText>
            <Divider/>

            <CardTitle title="Расписание" />
            <CardText>{schedule}</CardText>
            <Divider/>
          </Card>
        </Link>
      </div>
    )
  }
}

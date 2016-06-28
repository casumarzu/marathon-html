import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import _ from 'lodash'
import * as sprintListActions from '../actions/SprintList.Actions'

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
      <div className={ styles['sprint-list__item'] +' '+ styles[sprintType] }>
        <Link to={`/sprint/${id}`}>
          <h3>Забег: {title}</h3>
          <sup>{ supText }</sup>
        </Link>
        <h4>Информация о забеге</h4>
        <p>{ info }</p>
        <h4>Расписание</h4>
        <p>{ schedule }</p>
        <h4>Цена</h4>
        <p>{ price }</p>
      </div>
    )
  }
}

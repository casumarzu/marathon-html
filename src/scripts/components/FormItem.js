import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import styles from 'Styles/Registration.styl'

export default class FormItem extends Component {

  handleChange(event) {
    const {value} = event.target
    this.props.handleChange({
      value,
      name: this.props.name
    })
  }
  render() {
    const {type, title, name, value} = this.props
    return (
      <p>
        <label>
          <span>{title}</span>
          <input type="text" value={ value } required placeholder={title} onChange={::this.handleChange} />
        </label>
      </p>
    )
  }
}

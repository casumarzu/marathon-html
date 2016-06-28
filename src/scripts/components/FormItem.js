import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import styles from 'Styles/Registration.styl'

export default class FormItem extends Component {

  handleChange(event) {
    const {value:text} = event.target
  }
  render() {
    const {type, title} = this.props
    return (
      <p>
        <label>
          <span>{title}</span>
          <input type="text" required placeholder={title} onChange={::this.handleChange} />
        </label>
      </p>
    )
  }
}

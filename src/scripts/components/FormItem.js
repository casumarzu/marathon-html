import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { TextField } from 'material-ui'

import styles from 'Styles/Registration.styl'

export default class FormItem extends Component {

  handleChange(event) {
    const { value } = event.target
    const { name } = this.props
    this.props.handleInputChange({ value, name })
  }

  handleClear() {}

  render() {
    const {type, title, name, value, handleClear} = this.props
    return (
      <div>
        <TextField
          value={ value }
          required
          placeholder={title}
          onChange={::this.handleChange}
          hintText={title}
        />
      </div>
    )
  }
}

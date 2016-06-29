import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import _ from 'lodash'

import styles from 'Styles/Registration.styl'

import FormItem from 'Components/FormItem'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'

export default class SprintItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: ''
    }
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }


  handleRegistration(e) {
    e.preventDefault()
    this.handleOpen()
    console.log(this.state)
  }
  handelChangeName(e) {
    this.setState({name: e.taraget.value})
  }
  render() {

    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={::this.handleClose}
      />,
    ]

    return (
      <div className={ styles.Registration }>
        <h3>Регистрация участника:</h3>
        <form onSubmit={::this.handleRegistration}>
          <FormItem title="Имя" type="text" />
          <FormItem title="Возраст" type="age" />
          <FormItem title="Пол" type="text" />
          <FormItem title="Клуб" type="text" />
          <FormItem title="Страна, город" type="text" />
          <FormItem title="Телефон" type="phone" />
          {/*<FormItem title="Допущен или нет" type="checkbox" />
          <FormItem title="Оплатил или нет" type="checkbox" />*/}
          {/*<Checkbox
            label="Допущен"
            checked={true}
            disabled={true}
            style={styles.checkbox}
          />
          <Checkbox
            label="Оплатил"
            checked={true}
            disabled={true}
            style={styles.checkbox}
          />*/}
          <p>
            <button type="submit">Регистрация</button>
          </p>
          <Dialog
            title="Добавление участника"
            modal={false}
            actions={actions}
            open={this.state.open}
            onRequestClose={::this.handleClose}
          >
            Участник успешно добавлен
          </Dialog>
        </form>
      </div>
    )
  }
}

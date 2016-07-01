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
      id: 1,
      marathon: 2,
      name: 'Иван Иванов',
      gender: 'male',
      age: 23,
      country: 'Россия, Тверь',
      club: 'Волга Тверь',
      phone: '+7-920-123-45-67',
      allowed: true,
      paid: true
    }
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  componentDidMount() {

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
  }
  handelChangeName(e) {

  }

  handleChange(e) {

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
    const { name, age, gender, club, country, phone } = this.state
    return (
      <div className={ styles.Registration }>
        <h3>Регистрация участника:</h3>
        <form onSubmit={::this.handleRegistration}>
          <FormItem title="Имя" type="text" name="name" value={ name } />
          <FormItem title="Возраст" type="age" name="age" value={ age } />
          <FormItem title="Пол" type="text" name="gender" value={ gender } />
          <FormItem title="Клуб" type="text" name="club" value={ club } />
          <FormItem title="Страна, город" type="text" name="country" value={ country } />
          <FormItem title="Телефон" type="phone" name="phone" value={ phone } />
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

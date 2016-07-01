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
      marathon: +this.props.id,
      name: '',
      gender: 'male',
      age: null,
      country: '',
      club: '',
      phone: '',
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
    this.clearFields()
  }

  clearFields() {
    console.log('clear');
  }


  handleRegistration(e) {
    e.preventDefault()
    this.handleOpen()
    console.info('FORM FILDS', this.state)
    let stateCloned = _.clone(this.state)
    delete stateCloned.open
    this.props.addItem(stateCloned)
  }

  handleChange(event) {
    // const { name, age, gender, club, country, phone } = this.state
    const obj = {}
    const { name, value } = event
    obj[name] = value
    this.setState(obj)
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
          <FormItem title="Имя" type="text" name="name" handleChange={::this.handleChange} />
          <FormItem title="Возраст" type="age" name="age" handleChange={::this.handleChange} />
          <FormItem title="Пол" type="text" name="gender" handleChange={::this.handleChange} />
          <FormItem title="Клуб" type="text" name="club" handleChange={::this.handleChange} />
          <FormItem title="Страна, город" type="text" name="country" handleChange={::this.handleChange} />
          <FormItem title="Телефон" type="phone" name="phone" handleChange={::this.handleChange} />
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

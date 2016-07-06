import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import _ from 'lodash'
import { Dialog, Card, CardHeader, CardTitle, Divider, FlatButton, RaisedButton, Checkbox, RadioButton, RadioButtonGroup } from 'material-ui'
import { colors } from 'material-ui/styles'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'

import FormItem from 'Components/FormItem'
import s from 'Styles/Registration.styl'

const GroupStyle = {
  padding: '20px 0'
}


export default class SprintItem extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.state = {
      open: false,
      distance: +this.props.id,
      name: '',
      gender: 'male',
      age: '',
      country: '',
      club: '',
      phone: '',
      allowed: false,
      paid: false,
      clear: false
    }
  }

  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
    this.clearFields()
  }

  clearFields() {
    this.setState({
      name: '',
      age: '',
      gender: 'male',
      country: '',
      club: '',
      phone: '',
      allowed: false,
      paid: false
    })
  }


  handleRegistration(e) {
    e.preventDefault()
    this.handleOpen()
    let stateCloned = _.clone(this.state)
    delete stateCloned.clear
    delete stateCloned.open
    this.props.addItem(stateCloned)
    this.clearFields()
  }

  handleChange(name, value) {
    const obj = {}
    obj[name] = value
    this.setState(obj)
  }

  handleInputChange(event) {
    const { name, value } = event
    this.handleChange(name, value)
  }

  handleRadioChange(event) {
    const { name, value } = event.target
    this.handleChange(name, value)
  }

  handleCheckBoxChange(event, isInputChecked) {
    const { name } = event.target
    const value = isInputChecked
    this.handleChange(name, value)
  }

  render() {

    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={::this.handleClose}
      />
    ]

    const dialogNode = (
      <Dialog
        title="Добавление участника"
        modal={false}
        actions={actions}
        open={this.state.open}
        onRequestClose={::this.handleClose} >
        Участник успешно добавлен
      </Dialog>
    )

    const { name, age, gender, club, country, phone, allowed, paid } = this.state

    return (
      <div className={ s.Registration }>
        <Card style={{
            height: '100%'
          }}>
          <CardTitle title="Регистрация участника:"/>
          <form onSubmit={::this.handleRegistration} style={{
              padding: '20px',
              boxSizing: 'border-box'
            }}>
            <FormItem title="Имя" type="text" name="name" handleInputChange={::this.handleInputChange} value={name} />
            <FormItem title="Возраст" type="age" name="age" handleInputChange={::this.handleInputChange} value={age} />
            <RadioButtonGroup name="gender" defaultSelected="male" valueSelected={gender} value={gender} onChange={::this.handleRadioChange} style={GroupStyle}>
              <RadioButton value="male" label="Male"/>
              <RadioButton value="female" label="female" />
            </RadioButtonGroup>
            <FormItem title="Клуб" type="text" name="club" handleInputChange={::this.handleInputChange} value={club} />
            <FormItem title="Страна, город" type="text" name="country" handleInputChange={::this.handleInputChange} value={country} />
            <FormItem title="Телефон" type="phone" name="phone" handleInputChange={::this.handleInputChange} value={phone} />
            <div style={GroupStyle}>
              <Checkbox label="Допущен" checked={allowed} name="allowed" onCheck={::this.handleCheckBoxChange} />
              <Checkbox label="Оплатил" checked={paid} name="paid" onCheck={::this.handleCheckBoxChange} />
            </div>
            <RaisedButton type="submit" label="Регистрация" primary={true} />
            { dialogNode }
          </form>
        </Card>
      </div>
    )
  }
}

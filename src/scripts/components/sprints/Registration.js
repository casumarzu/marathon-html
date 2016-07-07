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

let defaultState = {
  name: '',
  e_mail: '',
  sex: '1',
  age_group: '',
  nation: '',
  city: '',
  club: '',
  phone: '',
  access: false,
  payment: false
}

export default class SprintItem extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    defaultState = Object.assign(defaultState, {
      open: false
    })
    this.state = defaultState
  }

  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
    this.clearFields()
  }

  clearFields() {
    this.setState(defaultState)
  }


  handleRegistration(e) {
    e.preventDefault()
    const { props, state } = this
    const { race_id, distance_id } = props
    this.handleOpen()
    let stateCloned = _.clone(state)
    delete stateCloned.open
    const { name, age_group, e_mail, sex, club, nation, city, phone, access, payment } = stateCloned
    props.add(race_id, distance_id, name, age_group, e_mail, sex, club, nation, city, phone, access, payment)
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

    const { name, age_group, e_mail, sex, club, nation, city, phone, access, payment } = this.state

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
            <FormItem title="E-mail" type="text" name="e_mail" handleInputChange={::this.handleInputChange} value={e_mail} />
            <FormItem title="Возрастная группа" type="age_group" name="age_group" handleInputChange={::this.handleInputChange} value={age_group} />
            <RadioButtonGroup name="sex" defaultSelected="1" valueSelected={sex} value={sex} onChange={::this.handleRadioChange} style={GroupStyle}>
              <RadioButton value="1" label="Male"/>
              <RadioButton value="2" label="female" />
            </RadioButtonGroup>
            <FormItem title="Клуб" type="text" name="club" handleInputChange={::this.handleInputChange} value={club} />
            <FormItem title="Страна" type="text" name="nation" handleInputChange={::this.handleInputChange} value={nation} />
            <FormItem title="Город" type="text" name="city" handleInputChange={::this.handleInputChange} value={city} />
            <FormItem title="Телефон" type="phone" name="phone" handleInputChange={::this.handleInputChange} value={phone} />
            <div style={GroupStyle}>
              <Checkbox label="Допущен" checked={access} name="access" onCheck={::this.handleCheckBoxChange} />
              <Checkbox label="Оплатил" checked={payment} name="payment" onCheck={::this.handleCheckBoxChange} />
            </div>
            <RaisedButton type="submit" label="Регистрация" primary={true} />
            { dialogNode }
          </form>
        </Card>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import SprintList from '../components/SprintList'
import * as sprintListActions from '../actions/SprintList.Actions'
import styles from 'Styles/Sprint.styl'
import indexStyle from 'Styles/index.styl'

class App extends Component {
  static propTypes = {}
  constructor(props) {
    super(props);
    this.state = { show: false }
  }
  componentDidMount() {
    const show = ()=> {
      this.setState({ show: true })
    }
    setTimeout(()=> {
      show()
    }, 100)

  }

  handleRegistration(event) {
    event.preventDefault()
    if(!this.state.value) return;
    // const { list } = this.props
    // list.push({
    //   id: _.uniqueId(),
    //   name: this.state.value,
    //   checked: false
    // })
    //
    // this.setState({ value: '' })
    //
    // this.props.addItem(list)
  }

  render() {
    let show = indexStyle.__active
    if(!this.state.show) show = ''
    const { sprintList } = this.props
    const id = this.props.params.id
    const sprint = _.find(sprintList.list, { id: +id })
    const {title, info, schedule, organization, infrastructure, price, type} = sprint
    return (
      <div className={`${indexStyle.Wrapper} ${show}`}>
        <h2>Спринт одиночный</h2>
        <h3>Забег: {title}</h3>
        <h4>Информация о забеге</h4>
        <p>{ info }</p>
        <h4>Расписание</h4>
        <p>{ schedule }</p>
        <h4>Организация</h4>
        <p>{ organization }</p>
        <h4>Инфраструктура</h4>
        <p>{ infrastructure }</p>
        <h4>Цена</h4>
        <p>{ price }</p>
        <form className={ styles['sprint-list'] } onSubmit={::this.handleRegistration}>
          <label>
            <span>Регистрация</span>
          </label>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sprintList: state.sprintList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sprintListActions: bindActionCreators([], dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

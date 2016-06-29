import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CircularProgress from 'material-ui/CircularProgress'

import SprintList from 'Components/sprints/SprintList'
import * as sprintListActions from 'Actions/sprints/Sprints.Actions'
import Registration from 'Components/sprints/Registration'
import styles from 'Styles/Sprint.styl'
import indexStyle from 'Styles/index.styl'



class Sprint extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  componentDidMount() {
    const show = ()=> {
      this.setState({ show: true })
    }
    setTimeout(()=> {
      show()
    }, 1500)
  }
  render() {
    let show = indexStyle.__active
    if(!this.state.show) show = ''
    const { sprints } = this.props
    const id = this.props.params.id
    const sprint = _.find(sprints.list, { key: id })
    const { title, info, schedule, organization, infrastructure, price, type } = sprint
    let BottomBlock = ''
    if(type === 'present') {
      BottomBlock = <Registration />
    }
    let progressShow = ''
    if(this.state.show) progressShow = indexStyle.__hide
    return (
      <div>
        <CircularProgress size={2} className={progressShow} />
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
          { BottomBlock }
        </div>
      </div>
    )
  }
}



Sprint.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
}

Sprint.propTypes = {
  sprints: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    sprints: state.sprints,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sprintListActions: bindActionCreators([], dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprint)

import React, { Component, PropTypes } from 'react'
import SprintItem from './SprintItem'
import _ from 'lodash'
// import { TextField } from 'material-ui'
import styles from 'Styles/Sprint.styl'

export default class SprintList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    checkItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    if(!this.state.value) return;
    const { list } = this.props
    list.push({
      id: _.uniqueId(),
      name: this.state.value,
      checked: false
    })

    this.setState({ value: '' })

    this.props.addItem(list)
  }
  handleChangeInput(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    const { list, checkItem, type } = this.props
    const { value } = this.state
    const listLng = list.length
    const sprintListView = list.map((sprint) => {
      let {id, title, info, schedule, organization, infrastructure, price, type} = sprint
      return (
        <SprintItem
          key={ id }
          id={ id }
          title={ title }
          checkItem={ checkItem }
          info={ info }
          schedule={ schedule }
          organization={ organization }
          infrastructure={ infrastructure }
          price={ price }
          type={ type } />
      )
    })

    return (
      <div className={styles['sprint-list']} >
        { sprintListView }
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import SprintItem from './SprintItem'
import _ from 'lodash'
// import { TextField } from 'material-ui'
import styles from 'Styles/Sprint.styl'

export default class SprintList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    changeItem: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    const { list, type } = this.props
    const { value } = this.state
    const listLng = list.length
    const sprintListView = list.map((sprint) => {
      const { id, title, info, schedule, organization, infrastructure, price, type } = sprint
      return (
        <SprintItem
          key={ id }
          id={ id }
          title={ title }
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

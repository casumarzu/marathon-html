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
  }

  render() {
    const { list, type } = this.props

    const sprintListView = list.map((sprint) => {
      const { key, title, info, schedule, organization, infrastructure, price, type } = sprint
      return (
        <SprintItem
          id={ key }
          key={ key }
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

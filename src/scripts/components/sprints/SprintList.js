import React, { Component, PropTypes } from 'react'
import SprintItem from './SprintItem'
import _ from 'lodash'
// import { TextField } from 'material-ui'
import styles from 'Styles/Sprint.styl'
import s from 'Styles/index.styl'

export default class SprintList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { list, type } = this.props

    const sprintListView = list.map((sprint) => {
      const { id, name, organizational_issues, infrastructure, type } = sprint
      return (
        <SprintItem
          id={ id }
          key={ id }
          name={ name }
          organization={ organizational_issues }
          infrastructure={ infrastructure }
          type={ type } />
      )
    })

    return (
      <div className={`${styles['sprint-list']} ${s.FlexItem}`} >
        { sprintListView }
      </div>
    )
  }
}

import React from 'react'
import { Link } from 'react-router-dom'

export default class Index extends React.Component {
  render () {
    return (
      <div className="content">
        <p>Lodash用法demo</p>
        <Link to='/array'>Array篇</Link>
        <Link to='/antd'>实战篇</Link>
      </div>
    )
  }
}
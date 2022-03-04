import { Dropdown } from '@fluentui/react'
import React from 'react'
import "./MiddleSection.css"
import DropdownMenu from './dropdown/Dropdown'

const MiddleSection = () => {
  return (
    <div className='MiddleSection'>
      <h1>Upcoming Events</h1>
      <DropdownMenu />
    </div>
  )
}

export default MiddleSection
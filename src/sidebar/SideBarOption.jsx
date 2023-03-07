import React from 'react'
import "./SideBarOption.css"
export default function Sidebaroption({text,Icon}) {
  return (
    <div className='sidebarOption'>
        <Icon className="something"/>
        <h2>{text}</h2>
    </div>
  )
}
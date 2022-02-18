import React from 'react'

export default function Header(props) {
  return (
    <div>
        <h3>{props.text}</h3>
        <h3>{props.subText}</h3>
    </div>
  )
}

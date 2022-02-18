import React from 'react'
import { Link } from 'gatsby'

export default function LayOut({children}) {
  return (
    <div>
        <h1>Site Title</h1>
        <Link to='/Sales'>Sales</Link>
        {children}
    </div>
  )
}

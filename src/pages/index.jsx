import * as React from "react"
import{Link}from 'gatsby'
import Header from '../components/Header'

// markup
const IndexPage = () => {
    return ( 
        <div>
            <Header text='This is main text' subText='this is subtext'></Header>
       <h1> Al Siraj Petroleum </h1>
       <Link to='/Sales'>Sales</Link>
       </div>
    )
}

export default IndexPage
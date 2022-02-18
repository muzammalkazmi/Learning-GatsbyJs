import * as React from "react"
import{Link}from 'gatsby'
import Header from '../components/Header'
import LayOut from "../components/LayOut"

// markup
const IndexPage = () => {
    return ( 
        <div>
            <LayOut>
            <Header text='This is main text' subText='this is subtext'></Header>
       <h1> Al Siraj Petroleum </h1>
       <Link to='/Sales'>Sales</Link>
            </LayOut>
      
       </div>
    )
}

export default IndexPage
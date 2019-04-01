import React from "react"
import Menu from "../components/Menu"
import "../styles/transfers.css"
import { StaticQuery, graphql } from "gatsby"
import AllTransfers from "../components/AllTransfers"

const transfers = () => {
  return (
    <div className="main">
      <Menu />
      <div className="transfers">
        <h1 className="title">transfers</h1>
        <AllTransfers />
      </div>
    </div>
  )
}

export default transfers

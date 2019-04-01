import React from "react"
import Menu from "../components/Menu"
import "../styles/about.css"
import { Link, graphql } from "gatsby"
import { FaGithub } from "react-icons/fa"

const transfers = () => {
  return (
    <div className="main">
      <Menu />
      <div className="about">
        <h1 className="title">About me (Contact)</h1>
        <div className="icons">
          <a className="icon" href="https://github.com/ttekpl">
            <FaGithub /> Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default transfers

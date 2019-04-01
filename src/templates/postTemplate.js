import React from "react"
import Menu from "../components/Menu"
import "../styles/postTemplate.css"

const postTemplate = ({ pageContext: { data } }) => (
  <>
    <div className="main">
      <Menu />
      <div className="post">
        <h1>{data.title}</h1>
        <h2>{data.text}</h2>
        <img src={data.img} alt="" />
      </div>
    </div>
  </>
)

export default postTemplate

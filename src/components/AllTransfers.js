import React from "react"
import "../styles/transfers.css"
import { StaticQuery, graphql } from "gatsby"
import "../styles/AllTransfers.css"
import { FaEuroSign, FaLongArrowAltRight } from "react-icons/fa"

const AllTransfers = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          content {
            transfers {
              from
              to
              price
              player
              type
              id
            }
          }
        }
      `}
      render={data => (
        <>
          {[...data.content.transfers].reverse().map(node => (
            <div className="trans" key={node.id}>
              <h1>
                <span>
                  {node.from} <FaLongArrowAltRight /> {node.to}
                </span>
              </h1>
              <h1>
                Price:{node.price}
                <FaEuroSign />
              </h1>
              <h1>Player: {node.player}</h1>
              <h1>type: {node.type}</h1>
            </div>
          ))}
        </>
      )}
    />
  )
}

export default AllTransfers

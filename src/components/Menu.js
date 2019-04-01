import React from "react"
import { Link } from "gatsby"
import "../styles/menu.css"
import { FaFutbol } from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

class Menu extends React.Component {
  state = {
    active: false,
    menu: false,
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        this.setState(prev => ({
          active: true,
        }))
      } else {
        this.setState(prev => ({
          active: false,
        }))
      }
    })

    if (window.innerWidth <= 600) {
      this.setState(prev => ({
        active: true,
      }))
    } else {
      this.setState(prev => ({
        active: false,
      }))
    }
  }

  render() {
    return (
      <>
        <div className="logo">
          All about Football <FaFutbol />
        </div>
        <nav
          className={`menu ${
            this.state.active && this.state.menu ? "show" : null
          }`}
        >
          <Link className="link" to="/">
            Articles
          </Link>
          <Link className="link" to="/transfers">
            Transfers
          </Link>
          <Link className="link" to="/about">
            About me
          </Link>
        </nav>
        {!this.state.menu ? (
          <FaBars
            style={{ display: this.state.active ? "block" : "none" }}
            onClick={prev => {
              this.setState(prev => ({
                menu: !prev.menu,
              }))
            }}
          />
        ) : (
          <FaTimes
            style={{ display: this.state.active ? "block" : "none" }}
            onClick={prev => {
              this.setState(prev => ({
                menu: !prev.menu,
              }))
            }}
          />
        )}
      </>
    )
  }
}

export default Menu

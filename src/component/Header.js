import React, { Component } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import './header.css'
import { DataContext } from "./Context";
class Header extends Component {
  static contextType = DataContext;

    state = {
        toggle :false
    }

    MenuToogle = () => {

        this.setState({toggle :!this.state.toggle})
    }

  render() {

    const { cart} = this.context
    return (
      <>
        <header>
          <div className="menu" onClick={this.MenuToogle}>
            <img src={Menu} width="20" alt="" />
          </div>
          <div className="logo">
            <h1>
              <Link to="/">nike</Link>
            </h1>
          </div>
          <nav>
            <ul className={this.state.toggle ? 'toggle' : ''}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Product">Product</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Login">Login / Register</Link>
              </li>
              <li className="close" onClick={this.MenuToogle}>
                <img src={Close} width="20" alt="" />
              </li>
            </ul>
            <div className="nav-cart">
                <span>{cart.length}</span>
                <Link to="/Cart">
                <img src={CartIcon} width="20" alt="" />
                </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;


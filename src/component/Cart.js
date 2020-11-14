import React, { Component } from "react";
import { DataContext } from "./Context";
import Colors from "./Colors";
import { Link } from "react-router-dom";
import "./Details.css";
import "./Cart.css";

export class Cart extends Component {
  static contextType = DataContext;


  render() {
    const {
      cart,
      reduction,
      increase,
      removeProduct,
      totalPrice,
    } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nothing Products</h2>;
    } else {
      return (
        <>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                  <p>
                    <Colors colors={item.colors} />
                  </p>
                  <p>{item.description}</p>
                  <p>{item.content}</p>
                  <div className="amount">
                    <button
                      className="count"
                      onClick={() => reduction(item._id)}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="count"
                      onClick={() => increase(item._id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="Delete" onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}
          <div className="total">
            <Link to="/Paymant">paymant</Link>
            <h3>total : ${totalPrice}</h3>
          </div>
        </>
      )
    }
  }
}

export default Cart;

import React, { Component } from "react";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import Colors from './Colors'
import './Details.css'
export class Details extends Component {
  static contextType = DataContext;

  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const {addToCart} = this.context
    return (
      <>
        {
        product.map(item => (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
                <p>
                 <Colors  colors={item.colors}/>
                </p>
                <p>{item.description}</p>
                <p>{item.content}</p>

                <Link to="/cart" className="cart" onClick={()=> addToCart(item._id)}>
                  add To Cart
                </Link>
              </div>
            </div>
          </div>
        ))
        }
      </>
    );
  }
}

export default Details;

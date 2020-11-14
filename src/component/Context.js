import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nick shoes 01",
        src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        description: "UI/UX disigning , html css toturial",
        content: "welcome to Shopping me",
        price: 23,
        colors: ["red", "black", "crimson", "tel"],
        count: 1,
      },
      {
        _id: "2",
        title: "Nick shoes 02",
        src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        description: "UI/UX disigning , html css toturial",
        content: "welcome to Shopping me",
        price: 19,
        colors: ["red", "crimson", "tel"],
        count: 1,
      },
      {
        _id: "3",
        title: "Nick shoes 03",
        src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        description: "UI/UX disigning , html css toturial",
        content: "welcome to Shopping me",
        price: 50,
        colors: ["lightblue", "white", "crimson", "tel"],
        count: 1,
      },
      {
        _id: "4",
        title: "Nick shoes 04",
        src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        description: "UI/UX disigning , html css toturial",
        content: "welcome to Shopping me",
        price: 15,
        colors: ["orange", "black", "crimson", "tel"],
        count: 1,
      },
      {
        _id: "5",
        title: "Nick shoes 05",
        src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        description: "UI/UX disigning , html css toturial",
        content: "welcome to Shopping me",
        price: 10,
        colors: ["orange", "black", "crimson", "tel"],
        count: 1,
      },
      {
        _id: "6",
        title: "Nick shoes 06",
        src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        description: "UI/UX disigning , html css toturial",
        content: "welcome to Shopping me",
        price: 17,
        colors: ["orange", "black", "crimson", "tel"],
        count: 1,
      },
    ],
    cart: [],
    totalPrice : 0
  };

  addToCart = (id) => {
    const { products, cart } = this.state;

    const check = cart.every((item) => {
      return item._id !== id;
    });

    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("the product has been added");
    }
  };

  reduction = (id) => {
    const {cart} = this.state
    cart.forEach((item)=>{
      if(item._id === id){
        item.count === 1 ?  item.count = 1 : item.count -= 1
      }
    })
    this.setState({cart : cart})
    this.getTotal()
  };
  increase = (id) => {
    const {cart} = this.state
    cart.forEach((item)=>{
      if(item._id === id){
         item.count += 1 
      }
    })
    this.setState({cart : cart})
    this.getTotal()
  };
  removeProduct = (id) => {
    if(window.confirm('do you have delete your product ?')){
      const {cart} = this.state
      cart.forEach((item , index)=>{
        if(item._id === id){
          cart.splice(index , 1)
        }
      })
      this.setState({cart : cart})
      this.getTotal()
    }
  
  }

  getTotal = () => {
    const {cart} = this.state
    const res = cart.reduce((prev , item) => {
      return prev + (item.price * item.count);
    },0)
    this.setState({totalPrice : res})
  }
  
  componentDidUpdate(){
    localStorage.setItem('dataCart' , JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal' , JSON.stringify(this.state.totalPrice))
  }
  componentDidMount(){
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if(dataCart !== null){
      this.setState({cart: dataCart})
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
    if(dataTotal !== null){
      this.setState({totalPrice: dataTotal})
    }
  }
  render() {
    const { products, cart , totalPrice } = this.state;
    const { addToCart, reduction , increase ,removeProduct , getTotal} = this;
    return (
      <DataContext.Provider value={{ products, addToCart,getTotal , cart , reduction , increase , removeProduct , totalPrice}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

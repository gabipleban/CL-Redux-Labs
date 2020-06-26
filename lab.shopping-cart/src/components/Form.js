// Formularz do dodawania produktu
import React, { Component } from 'react'
export default class Form extends Component {
  constructor(props) {
      super(props)
      this.state = {
          name: '',
          price: '',
      }
  }
  handleNameChange = (e)=>{
      this.setState({name:e.target.value})
  }
 handlePriceChange = (e)=>{
        this.setState({price:e.target.value})
  }
onSubmit = (e)=>{
    e.preventDefault()
    let product = {
        name: this.state.name,
        price: this.state.price
    }
    this.props.addProduct(product)
}
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' placeholder='name' value={this.state.name} onChange={this.handleNameChange}/>
                <input type='text' placeholder='price' value={this.state.price}  onChange={this.handlePriceChange}/>
                <button type='submit'>Dodaj produkt</button>
            </form>
        )
    }
}
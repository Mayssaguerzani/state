import React, { Component } from 'react'
import Profile from './Components/Profile/Profile'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      show : false ,
      person :{
        fullName : "mayssa",
        bio : "a web developer"

      }
    }
  }
  handleClick = () =>{
    this.setState({show : !this.state.show})
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        {this.state.show ? (<><Profile
        fullName={this.state.person.fullName}
        bio = {this.state.person.bio}/></>): null}
      </div>
    )
  }
}

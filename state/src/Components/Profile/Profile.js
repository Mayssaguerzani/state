import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            counter : 0 , 
            intervall : null
        }
    }

      componentDidMount(){
         this.setState({
             intervall : setInterval(() =>
             this.setState({counter : this.state.counter + 1}),1000
             )})
      }
     componentWillUnmount(){
         clearInterval(this.state.counter)
     }
    render() {
        return (
            <div>
                <h1>{this.props.fullName}</h1>
                <h1>{this.props.bio}</h1>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Child extends Component {

    componentDidUpdate(prevProps,prevState){ //triggers when components gets updated
        if(prevProps.number !== this.props.number){
            console.log('component updated')
        }
    }

  render() {
    return (
       <div>
            <h1>{this.props.number}</h1>
       </div>
    )
  }
}

import React, { Component } from "react";
import Child from "./Child/Child";

class LifeCycle extends Component {
    // 0. constructor
    // 1. ComponentDidMount - when components loads/renders first time - at the time of page loading
    // 2. componentWillReceiveProps (or UNSAFE_componentWillReceiveProps)
    // 3. componentWillUpdate (or UNSAFE_componentWillUpdate)
    // 4. getDerivedStateFromProps
    // 5. shouldComponentUpdate
    // 6. render
    // 7. setState

    //state = mutable, props=immutable

    constructor(){ //gets called before componentDidMount
        super(); //points to the class component
        //can be used to set variables
        this.state = {
            count : 0
        }
    }
    componentDidMount(){ //useEffect
        console.log('componentDidMount: When compnent render first time') //in strict mode code is called twice, else only once
    }

    componentWillUnmount(){
        console.log('component unmounted')
    }

    increment(){
        this.setState({ count: this.state.count + 1 })
    }

    render() { //render is also a lifecycle method
        return(
            <div>
                <Child number={this.state.count} ></Child>
                <button onClick={() => { this.increment() }}>Click Me!</button>
                {/* or this.increment.bind(this) */}
            </div>
        )
    }
}

export default LifeCycle;
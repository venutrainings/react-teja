import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            name : 'Welcome Dharma'
        }
    }

    changeName(){
        this.setState({
            name: 'Welcome Navina'
        })
    }
    render(){
        return (
        <div>
        <h2>{this.state.name}</h2>
        <button onClick = {() => this.changeName()}>Subscribed</button>
        </div>
        )
    }
}

export default Message;
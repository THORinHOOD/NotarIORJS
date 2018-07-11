import React, { Component } from 'react'
import Header from "./Header"
import "../css/content.css"

export default class Shell extends Component {
   
    render() {
        return (
            <div>
                <Header authorized = {this.props.application.state.authorized}/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}   
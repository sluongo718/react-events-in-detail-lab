// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
          this.props.onDelayedClick(event)
    }

    render(){
        return <button onClick={(event) => setTimeout(() => this.handleClick(event), this.props.delay)}>

        </button>
    }
}
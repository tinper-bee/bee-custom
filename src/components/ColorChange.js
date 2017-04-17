import React, { Component } from 'react';
import { FormControl } from 'tinper-bee';
import './ColorChange.css';

class ColorChange extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: props.data.value,
            name: props.data.key
        }
    }

    handleChange = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    render () {
        return (
            <div className="color-broad">
                <span className="color" style={{ backgroundColor: this.state.color }}>
                    { this.state.name }
                </span>
                <FormControl
                    value={ this.state.color }
                    onChange={ this.handleChange } />
            </div>
        )
    }
}

export default ColorChange;
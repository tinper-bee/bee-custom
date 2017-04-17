import React, { Component } from 'react';
import { Row } from 'tinper-bee';
import CustomForm from './CustomForm';


class Color extends Component{
    constructor(props){
        super(props);
    }
    render () {

        return (
            <Row>
                <CustomForm data={ this.props.data } />
            </Row>
        )
    }
}

export default Color;

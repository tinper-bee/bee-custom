import React, { Component } from 'react';
import { Button, Row, Col } from 'tinper-bee';
import CustomForm from '../components/CustomForm';
import { clone } from '../lib/index';

const customData = [
    {
        name: 'padding-y-lg',
        key: 'button-padding-y-lg',
        value: '8px'
    },
    {
        name: 'padding-x-lg',
        key: 'button-padding-x-lg',
        value: '15px'
    },
    {
        name: 'min-width',
        key: 'button-min-width',
        value: '7.2rem'
    },
    {
        name: 'height',
        key: 'button-height',
        value: '3.6rem'
    },
    {
        name: 'border-radius',
        key: 'button-border-radius',
        value: '0.25rem'
    },
    {
        name: 'line-height',
        key: 'button-line-height',
        value: '1.57142857'
    }
]

class CustomButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            customData: customData
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (key, index) {
        const self = this;
        let data = clone(this.state.customData);

        return function (e) {
            data[index].value=  e.target.value;
            self.setState({
                customData: data
            })
        }
    }
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Button>基础按钮</Button>
                    <Button colors="primary">主色按钮</Button>
                    <Button colors="success">success</Button>
                    <Button colors="info">info</Button>
                    <Button colors="warning">warning</Button>
                    <Button colors="danger">danger</Button>
                </Col>
                <Col md={12}>
                    <CustomForm data = { this.state.customData }  onChange={ this.handleChange }/>
                </Col>
            </Row>
        )
    }
}

export default CustomButton;

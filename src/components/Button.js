import React, { Component } from 'react';
import { Button, Row, Col, Icon } from 'tinper-bee';
import CustomForm from '../components/CustomForm';
import { clone } from '../lib/index';

function camelCase(name) {
    return name.replace(/-\w/g, function (m) {
        return m.charAt(1).toUpperCase();
    })
}

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
        value: '0.4rem'
    },
    {
        name: 'line-height',
        key: 'button-line-height',
        value: '1.57142857'
    }
];

const customStyle = {
    paddingYLg: '8px',
    paddingXLg: '15px',
    minWidth: '7.2rem',
    height: '3.6rem',
    borderRadius: '0.4rem',
    lineHeight: '1.57142857'
};


class CustomButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            customData: customData,
            customStyle: customStyle
        };
    }
    handleChange = (state, index) => {
        let data = clone(this.state.customData);

        return (e) => {
            data[index].value=  e.target.value;
            this.setState({
                customData: data
            })
        }
    }
    render() {
        const { customData } = this.state;
        let customStyle = {};
        customData.forEach((item, index) => {
            let newKey = camelCase(item.name);
            customStyle[newKey] = item.value;
        });

        return (
            <Row>
                <Col md={12} className="button-broad">
                    <Button style={{ ...customStyle }}>基础按钮</Button>
                    <Button colors="primary" style={{ ...customStyle }}>主色按钮</Button>
                    <Button colors="success" style={{ ...customStyle }}>success</Button>
                    <Button colors="info" style={{ ...customStyle }}>info</Button>
                    <Button colors="warning" style={{ ...customStyle }}>warning</Button>
                    <Button colors="danger" style={{ ...customStyle }}>danger</Button>
                </Col>
                <Col md={12} className="button-broad">
                    <Button size="sm" colors="primary">小按钮</Button>
                    <Button colors="primary">正常按钮</Button>
                    <Button size="lg" colors="primary">大按钮</Button>
                </Col>
                <Col md={12} className="button-broad">
                    <Button shape="block" colors="primary">块状按钮</Button>
                    <Button shape="squared" colors="primary">方按钮</Button>
                    <Button shape="round" colors="primary">圆角按钮</Button>
                    <Button shape="floating" colors="primary"><Icon type="uf-plus" /></Button>
                    <Button shape="pillLeft" colors="primary">左</Button>
                    <Button shape="pillRight" colors="primary">右</Button>
                    <Button shape="icon" colors="primary"><Icon type="uf-del" /></Button>
                </Col>
                <Col md={12}>
                    <CustomForm data = { customData }  onChange={ this.handleChange }/>
                </Col>
                <Col md={12}>
                    <Button colors="primary" className="btn-save">保存</Button>
                    <Button className="btn-back">还原</Button>
                </Col>
            </Row>
        )
    }
}

export default CustomButton;

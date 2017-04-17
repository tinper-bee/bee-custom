import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, Label, FormControl, Col } from 'tinper-bee';


const propTypes = {
    data: PropTypes.array
};

const defaultProps = {
    data: []
};

class CustomForm extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const { data, onChange } = this.props;


        return (
            <Form>
                {
                    data.map(function (item, index) {
                        return (
                            <Col md={4} key={index}>
                                <FormGroup>
                                    <Label>{item.name}</Label>
                                    <FormControl value={item.value} onChange={onChange(item.name, index)} />
                                </FormGroup>
                            </Col>
                        )
                    })
                }
            </Form>
        )
    }
}

CustomForm.propTypes= propTypes;
CustomForm.defaultProps= defaultProps;

export default CustomForm;

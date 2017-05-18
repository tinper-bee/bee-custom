import React, {Component, cloneElement} from 'react'
import { connect } from 'react-redux'
import {Navbar, FormControl, Badge, Con, Col, Tile, Icon, Row}  from 'tinper-bee'
import ColorChange from '../components/ColorChange'
import { Link } from 'react-router'
import menuData from '../config/menu'
const Menu = Navbar.Menu
const MenuItemGroup = Menu.ItemGroup



const colors = [
    {
        key: 'primary',
        value: '#0084ff'
    },
    {
        key: 'success',
        value: 'rgb(76,175,80)'
    }
]

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            colors: colors,
            baseStyle: {}
        }
    }



    renderItem = () => {
        console.log(this);
        if(this.props.children){
            return cloneElement(this.props.children, { colors: this.state.colors, baseStyle: this.state.baseStyle });
        }
        return ''

    }

    render() {
        return (

                <Con>
                    <div className="header">
                        组件定制
                    </div>
                    <Row>
                        <Col xs={2}>
                            <Menu
                                className="menu"
                                theme="dark"
                                mode="inline">

                                <MenuItemGroup title="全局样式">
                                    <Menu.Item key="color">颜色</Menu.Item>
                                    <Menu.Item key="base">基础样式</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="组件">
                                    {
                                        menuData.map((item, index) => {
                                            return (
                                                <Menu.Item key={index} >
                                                    <Link to={ item.url }>{ item.name }</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }

                                </MenuItemGroup>
                            </Menu>
                        </Col>
                        <Col xs={10}>
                            <Col sm={10} style={{ paddingTop: 40 }}>
                                { this.renderItem() }
                            </Col>
                            <Col sm={2}>
                                {
                                    this.state.colors.map(function (item, index) {
                                        return (
                                            <ColorChange
                                                key={index}
                                                data={item}
                                            />
                                        )
                                    })
                                }
                            </Col>
                        </Col>
                    </Row>
                </Con>


        )
    }
}

App = connect()(App);

export default App;

import React,{Component} from 'react'
import {Navbar,FormControl,Badge,Con,Col,Tile,Icon,Row}  from 'tinper-bee';
import NavLink from '../components/NavLink';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;
const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;
const SideContainer = Navbar.SideContainer;



class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: 1
        }
    }

    onToggle(value) {
        this.setState({expanded: value});
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <div id="portal">
                <Navbar fluid={true} className="portal-navbar" expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
                    <div className="toggle-wrap"><Toggle show/></div>
                    <Header>
                        <Brand>
                            私人订制
                        </Brand>
                    </Header>
                </Navbar>
                <div>
                    <SideContainer onToggle={this.onToggle.bind(this)} expanded={this.state.expanded}>
                        <Menu onClick={this.handleClick.bind(this)}
                              defaultOpenKeys={['demo3sub1']}
                              selectedKeys={[this.state.current]}
                              mode="inline"
                              className="portal-menu" >
                            <Menu.Item
                                key="1">
                                <NavLink to="/">首页</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2"><NavLink to="/color">色彩设置</NavLink></Menu.Item>
                            <Menu.Item key="3"><NavLink to="/zIndex">层级设置</NavLink></Menu.Item>
                            <Menu.Item key="4"><NavLink to="/components/button">Button</NavLink></Menu.Item>

                        </Menu>
                    </SideContainer>
                </div>
                <div>
                    <Con fluid>
                        <Row>
                            <Col md={9}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Con>
                </div>
            </div>
        )
    }
}

export default App;

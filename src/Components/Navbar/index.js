import React, {useState} from 'react';
import { Menu, Icon } from 'antd';
import { Drawer, Button,Grid  } from 'antd';
import chexlogo from '../../Assets/chexlogo.png';
import {Link} from "react-router-dom";


const { useBreakpoint } = Grid;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const CustomNavbar  = () => {

    const [current, setCurrent] = useState('')
    const [visible, setVisible] = useState(false)
    const { md } = useBreakpoint()
    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

    const handleClick = e => {
        setCurrent(e.key)
    };

    return(
        <nav className="menuBar">
            <div className="logo">

                <img src={chexlogo} alt="Logo" />
            </div>
            <div className="menuCon">
                <div className="leftMenu">
                    <Menu className="menuNavbarMain"  mode={md ? "horizontal" : "inline"}>
                        <Menu.Item key="mail">
                            <span className="linkNavbar_wrap">
                            <Link to="/homelanding" >
                                  Home
                            </Link>
                                </span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span>Services</span>} >
                            <MenuItemGroup title="" className="dropDownMenuWrap">
                                <Menu.Item className="linkNavbar_wrap_menu">
                                    <span className="linkNavbar_wrap">
                            <Link to="/uber-inspection" style={{color:'white'}}>
                                    Uber Inspections
                            </Link>
                                </span>

                                </Menu.Item>
                                <Menu.Item key="setting:2">
                                     <span className="linkNavbar_wrap">
                            <Link to="/lyft-inspection" style={{color:'white'}}>
                                    Lyft Inspections
                            </Link>
                                </span>
                                </Menu.Item>
                            </MenuItemGroup>

                        </SubMenu>
                        <Menu.Item key="alipay">
                            <span className="linkNavbar_wrap">
                            <Link to="/termsAndPolicy" >
                            Contact Us
                            </Link>
                            </span>

                        </Menu.Item>
                    </Menu>
                </div>
                <Button className="barsMenu" type="primary" onClick={showDrawer}>
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    className='drawerMenu'
                >
                    <Menu style={{color: 'white',backgroundColor:'#1B223B', height: '100%'}} mode={md ? "horizontal" : "inline"}>
                        <Menu.Item key="mail">
                           <span className="linkNavbar_wrap">
                            <Link to="/homelanding" style={{color: '#fff'}} >
                            Home
                            </Link>
                            </span>

                        </Menu.Item>
                        <SubMenu title='Services' >
                            <MenuItemGroup style={{backgroundColor:'#1B223B',borderBottom: 'none'}}>
                                <Menu.Item style={{color: '#fff'}} key="setting:1">
                                    <span className="linkNavbar_wrap">
                            <Link to="/uber-inspection"  style={{color: '#fff'}}>
                           Uber Inspections
                            </Link>
                            </span>
                                </Menu.Item>
                                <Menu.Item style={{color: '#fff'}} key="setting:2">
                                      <span className="linkNavbar_wrap">
                            <Link to="/lyft-inspection"  style={{color: '#fff'}}>
                          Lyft Inspections
                            </Link>
                            </span>
                                    </Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <Menu.Item key="alipay">
                            <span className="linkNavbar_wrap">
                            <Link to="/" style={{color: '#fff'}} >
                            Contact Us
                            </Link>
                            </span>

                        </Menu.Item>
                    </Menu>
                </Drawer>
            </div>
        </nav>
    )
}
export default CustomNavbar;

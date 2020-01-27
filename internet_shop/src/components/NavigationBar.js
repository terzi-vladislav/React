import React, { Component, createRef } from 'react';
import { Nav, Navbar, NavItem, OverlayTrigger, Popover } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div `
    .navbar {
        background-color: #FCEFE3;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    .line {
        width: 34px;
        height: 2px;
        background: #423835;
        margin: 6px;
    }
    
    @media all and (max-width: 1000px) {
        .navbar {
            height: 70px;
        }
        
        .line {
            width: 30px;
            height: 2px;
            background: #423835;
            margin: 5px;
        }
    }
    
    .nav-links {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed;
        transform: translate(-50px, 206px);
    }
    
    .list-item {
        margin: 5px;
        height: 70px;
        width: 240px;
        background: #EEAE8C;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    
    .aaa {
        font-family: sans-serif;
        color: white;
        font-size: 30px;
        margin-bottom: 3px;
    }
    
    .bars {
        padding: 0px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 46px;
        flex-direction: column;
        cursor: pointer;
        background-color: #FCEFE3;
        border-width: 0px;
    }
    
    .navbar-brand, .navbar-nav, .navbar-link {
        color: #423835;
        font-family: Sans-Serif;
        font-size: 40px;
        line-height: 47px;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        transform: translate(-77px, 0px);

        &:hover {
            text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
            color:  #423835;
            transition: 600ms;
        }
    }
    
    @media all and (max-width: 900px) {
        .navbar-brand, .navbar-nav, .navbar-link {
            left: 0;
            transform: translate(77px, 0px);
            font-size: 35px;
            line-height: 40px;
        }
    }
    
    .fab {
        font-size: 45px;
        color: #423835;
        margin-top: 3px;
        margin-right: 0px;
        
        &:hover {
            text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
            color:  #423835;
            transition: 600ms;
        }
    }
    
    .fas {
        font-size: 23px;
        color: #FCEFE3;
        margin-right: 2px;
        margin-top: 1px;
    }
    
    .buttons {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0px, -32px);
        margin-right: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 240px;
    }
    
    .cart {
        background: #423835;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        border-radius: 7px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-width: 0px;
        margin-right: 20px;
        margin-left: 3px;
        
        &:hover {
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
            transition: 600ms;
        }
        
        &:active {
        transform: translate(0px, 2px);
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        }
    }
    
    .login {
        background: #EEAE8C;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        border-radius: 7px;
        width: 100px;
        height: 40px;
        border-width: 0px;
        color: #FCEFE3;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
            transition: 600ms;
        }
        
        &:active {
        transform: translate(0px, 2px);
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        }
    }
    
    @media all and (max-width: 700px) {
        .buttons {
            margin-right: 8px;
        }
        
        .cart {
            margin-right: 15px;
            margin-left: 0px;
        }
    }
`;

const popover2 = (
    <Popover id="popover-basic">
        <Popover.Content>
            <ul className="nav-links">
                <Nav.Link className="list-item" href="/toys"><p className="aaa">toys</p></Nav.Link>
                <Nav.Link className="list-item" href="/cacti"><p className="aaa">cacti</p></Nav.Link>
                <Nav.Link className="list-item" href="/special"><p className="aaa">special</p></Nav.Link>
            </ul>
        </Popover.Content>
    </Popover>
);

const popover = (
    <Popover id="popover-basic">
        <Popover.Content>
            <ul className="nav-links">
                <Nav.Link className="list-item" href="/"><p className="aaa">main</p></Nav.Link>
                <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                    <Nav.Link className="list-item"><p className="aaa">shop</p></Nav.Link>
                </OverlayTrigger>
                <Nav.Link className="list-item" href="/#about"><p className="aaa">about me</p></Nav.Link>
                <Nav.Link className="list-item" href="/#faq"><p className="aaa">FAQ</p></Nav.Link>
            </ul>
        </Popover.Content>
    </Popover>
);

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            target: createRef()
        };
    }

    render() {
        return (
            <Styles>
                <Navbar collapseOnSelect expand="md" fixed="top" >
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Nav.Link className="bars" onSelect={() => this.setState({show: !this.show})}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </Nav.Link>
                        </OverlayTrigger>
                        <Navbar.Brand href="/">Marusya</Navbar.Brand>
                        <div className="buttons">
                            <NavItem>
                                <Nav.Link href="https://www.instagram.com/marussia.toys/">
                                    <i className="fab fa-instagram"></i>
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link className="cart">
                                    <i className="fas fa-shopping-cart"></i>
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link className="login">
                                    login
                                </Nav.Link>
                            </NavItem>
                        </div>
                </Navbar>
            </Styles>
        );
    }
}

export default NavigationBar;
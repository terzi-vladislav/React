import React from "react";
import { Jumbotron as Jumbo, Nav } from "react-bootstrap";
import styled from "styled-components";
import backgroundToys from "../assets/toys.jpg";

const Styles = styled.div`
    .jumbo {
        background: url(${backgroundToys}) no-repeat fixed bottom;
        background-size: cover;
        background-position: center;
        color: #ffffff;
        height: 830px;
        position: relative;
        z-index: -2;
        margin: 0px;
    }
    
    @media all and (max-width: 1117px) {
        .jumbo {
            height: 750px;
        }
    }
    
    .overlay {
        background-color: rgba(50, 50, 50, 0.60);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        margin-bottom: 0px;
    }
    
    .shop {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    
    .header-div {
        width: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 25%;
        bottom: 35%;
    }
    
    .header {
        font-size: 65px;
        font-family: Sans-Serif;
        color: #FCEFE3;
        text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.35);
        text-align: center;
    }
    
    .down {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
        height: 68px;
        width: 68px;
        background-color: #FCEFE3;
        border-radius: 40px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translate(-34px, 0px);
        bottom: 10%;
        
        &:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.55);
            transition: 600ms;
        }
        
        &:active {
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
            transition: 100ms;
            transform: translate(-34px, 2px);
        }
    }
    
    .left {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
        height: 68px;
        width: 68px;
        background-color: #FCEFE3;
        border-radius: 40px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translate(-125px, 0px);
        bottom: 75%;
        
        &:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.55);
            transition: 600ms;
        }
        
        &:active {
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
            transition: 100ms;
            transform: translate(-125px, 1px);
        }
    }
    
    @media all and (max-width: 1000px) {
        .header-div {
            bottom: 30%;
        }
        
        .header {
            font-size: 55px;
        }
    }
    
    .line1 {
        width: 20px;
        height: 1px;
        position: absolute;
        background: #9B7660;
        border: 1px solid #9B7660;
        transform: translate(-7px, 4px) rotate(45deg);
    }
    
    .line2 {
        width: 20px;
        height: 1px;
        position: absolute;
        background: #9B7660;
        border: 1px solid #9B7660;
        transform: translate(7px, 4px) rotate(-45deg);
    }
    
    .line1-back {
        width: 20px;
        height: 1px;
        position: absolute;
        background: #9B7660;
        border: 1px solid #9B7660;
        transform: translate(-4px, 7px) rotate(45deg);
    }
    
    .line2-back {
        width: 20px;
        height: 1px;
        position: absolute;
        background: #9B7660;
        border: 1px solid #9B7660;
        transform: translate(-4px, -7px) rotate(-45deg);
    }
    
    .all {
        width: 200px;
        font-size: 45px;
        line-height: 53px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FCEFE3;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.55);
        position: absolute;
        transform: translate(150px, -3px);
    }
`;

export const JumboToys = () => (
    <Styles>
        <div className="shop">
            <Jumbo fluid className="jumbo">
                <div className="overlay">
                </div>
            </Jumbo>
            <Nav.Link href="/shop" className="left">
                <div className="line1-back"></div>
                <div className="line2-back"></div>
                <div className="all">all items</div>
            </Nav.Link>
            <div className="header-div">
                <h1 className="header">Who said that toys are only for kids?</h1>
            </div>
            <Nav.Link href="#toys" className="down">
                <div className="line1"></div>
                <div className="line2"></div>
            </Nav.Link>
        </div>
    </Styles>
)
import React from "react";
import { Jumbotron as Jumbo, Nav } from "react-bootstrap";
import styled from "styled-components";
import backgorundHome from "../assets/backgroundHome.JPG";

const Styles = styled.div`
    .jumbo {
        background: url(${backgorundHome}) no-repeat fixed bottom;
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
    
    .home {
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
        bottom: 55%;
    }
    
    .header {
        font-size: 65px;
        font-family: Sans-Serif;
        color: #FCEFE3;
        text-shadow: 0px 0px 13px rgba(0, 0, 0, 0.35);
        text-align: center;
    }
    
    .purchase {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
        height: 80px;
        width: 180px;
        background-color: #EEAE8C;
        border: 2px solid #9B7660;
        border-radius: 40px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translate(-90px, 0px);
        bottom: 40%;
        
        &:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.55);
            transition: 600ms;
        }
        
        &:active {
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
            transition: 100ms;
            transform: translate(-90px, 2px);
        }
    }
    
    @media all and (max-width: 1117px) {
        .purchase {
            bottom: 30%;
        }
        
        .header-div {
            bottom: 45%;
        }
    }
    
    .p {
        font-size: 27px;
        color: #FCEFE3;
        font-family: Sans-Serif;
    } 
    
    .discount {
        width: 320px;
        height: 70px;
        border-radius: 20px;
        border: 4px solid #9B7660;
        color: #9B7660;
        background: rgba(252, 239, 227, 0.9);
        position: absolute;
        bottom: 25%;
        left: 50%;
        transform: translate(-160px, 0);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
    }
    
    @media all and (max-width: 1117px) {
        .discount {
            width: 260px;
            height: 60px;
            font-size: 23px;
            transform: translate(-130px, 0);
            bottom: 15%;  
        }
    }
`;

export const JumboHome = () => (
    <Styles>
        <div className="home">
            <Jumbo fluid className="jumbo">
                <div className="overlay">
                </div>
            </Jumbo>
            <div className="header-div">
                <h1 className="header">Toys knitted for you</h1>
            </div>
            <Nav.Link href="/shop" className = "purchase">
                <div className="p">Purchase</div>
            </Nav.Link>
            <div className="discount">Buy 3 toys get 10% off</div>
        </div>
    </Styles>
)
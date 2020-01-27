import React from 'react';
import { JumboCacti } from "../components/JumboCacti";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import Card from "../components/Card";

const Styles = styled.div`
    .cactiBack1 {
        padding-top: 90px;
        width: 100%;
        background-color: #9B7660;
        display: flex;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
        flex-direction: column;
        padding-bottom: 70px;
    }
    
    .sort {
        position: absolute;
        width: 236px;
        height: 49px;
        background: #423835;
        box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        right: 70px;
        transform: translate(0, -60px);
        color: #FCEFE3;
        display: flex;
        align-items: center;
        font-size: 27px;
        padding-left: 15px;
        
         &:hover {
            transition: 600ms;
            cursor: pointer;
        }
        
        &:active {
            box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.45);
            transition: 100ms;
            transform: translate(0, -59px);
        }
    }
    
    @media all and (max-width: 1000px) {
        .sort {
            transform: translate(0, -70px);
            
            &:active {
                transition: 100ms;
                transform: translate(0, -69px);
            }
        }
    }
    
        @media all and (max-width: 600px) {
        .sort {
            right: 50%
            transform: translate(118px, -70px);
            
            &:active {
                transition: 100ms;
                transform: translate(0, -69px);
            }
        }
    }
    
    .down-small {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
        height: 39px;
        width: 39px;
        background-color: #FCEFE3;
        border-radius: 19.5px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 6px;
        bottom: 10%;
    }
    
    .line1-small {
        width: 13px;
        height: 1px;
        position: absolute;
        background: #9B7660;
        border: 1px solid #9B7660;
        transform: translate(-4px, 3px) rotate(45deg);
    }
    
    .line2-small {
        width: 13px;
        height: 1px;
        position: absolute;
        background: #9B7660;
        border: 1px solid #9B7660;
        transform: translate(4px, 3px) rotate(-45deg);
    }
    
    .cards {
        padding: 0;
        flex-wrap: wrap;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    
    @media all and (max-width: 1000px) {
        .categories {
            height: 100px;
        }
        
        .header1 {
            font-size: 40px;
        } 
    
        .cards {
            flex-direction: column;
        }
    }
`;

export const Cacti = () => (
    <Styles>
        <JumboCacti/>
        <div className="cactiBack1" id="cacti">
            <div className="sort">Sort
                <Nav.Link className = "down-small">
                    <div className="line1-small"></div>
                    <div className="line2-small"></div>
                </Nav.Link>
            </div>
            <div className="cards">
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-26.userapi.com/c858424/v858424960/140fa3/v3ROed5E5SA.jpg"}
                    name={"Cactus #1"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"600₽"}
                    special={false}
                    back_link={"/cacti"}
                />
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-1.userapi.com/c858424/v858424960/140f8f/BxWxBbJ25sE.jpg"}
                    name={"Opuntia"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"600₽"}
                    special={false}
                    back_link={"/cacti"}
                />
            </div>
        </div>
    </Styles>
)
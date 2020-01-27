import React, {Component} from 'react';
import { Form, Nav, NavItem } from "react-bootstrap";
import styled from "styled-components";

function style (special) {
    if (special) {
        return ("special");
    } else {
        return ("not-special");
    }
}

class ShopItemPage extends Component {
    render() {
        const { data } = this.props.location;

        const Styles = styled.div`
            .shopItemBack {
                margin-top: 70px;
                padding-top: 90px;
                width: 100%;
                background-color: #423835;
                display: flex;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
                flex-direction: row;
                padding-bottom: 70px;
                align-items: center;
                justify-content: center;
                padding-top: 50px;
                padding-bottom: 100px;
            }
            
            @media all and (max-width: 1100px) {
                .shopItemBack {
                    flex-direction: column;
                }
            }
            
            .left {
                box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
                height: 68px;
                width: 68px;
                background-color: #FCEFE3;
                border-radius: 34px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 0%;
                transform: translate(50px, -290px);
                
                &:hover {
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.55);
                    transition: 600ms;
                }
                
                &:active {
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
                    transition: 100ms;
                    transform: translate(50px, -289px);
                }
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
            
            .back-for-pic {
                margin-top: 100px;
                height: 530px;
                width: 530px;
                background: #FCEFE3;
                border-radius: 30px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);     
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .pic {
                background-image: url(${data.src});
                width: 430px;
                height: 430px;
                box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.25);
                border-radius: 215px;
                background-size: cover;
                
                &:hover {
                    transform: scale(1.1);
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.45);
                    transition: 700ms;
                }
            }
            
            .special {
                position: absolute;
                font-size: 23px;
                background: #EEAE8C;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                border-radius: 10px;
                color: #FCEFE3;
                width: 97px;
                height: 37px;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translate(230px, -230px);
            }
            
            .not-special {
                display: none;
            }
            
            @media screen and (max-width: 1100px) {
                .left {
                    transform: translate(50px, -545px);
                    
                    &:active {
                        transform: translate(50px, -544px);
                    }
                }
            }
            
            @media screen and (max-width: 600px) {
                .back-for-pic {
                    width: 350px;
                    height: 350px;
                }
                
                .pic {
                    width: 300px;
                    height: 300px;
                }
                
                .left {
                    transform: translate(70px, -425px);
                    
                    &:active {
                        transform: translate(70px, -424px);
                    }
                }
                
                .special {
                    transform: translate(140px, -150px);
                }
            }
            
            .info-back {
                margin-top: 100px;
                width: 500px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                margin-left: 70px;
            }
            
            @media screen and (max-width: 1100px) {
                .info-back {
                    margin-left: 0px;
                }
            }
            
            .name {
                font-family: Sans-Serif;
                font-size: 70px;
                color: #FCEFE3;
                transform: rotate(-7deg);
                margin-bottom: 20px;
            }
            
            .line {
                width: 500px;
                background: #FCEFE3;
                height: 1px;
                margin-bottom: 100px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            
            .price {
                font-family: Sans-Serif;
                color: #FCEFE3;
                font-size: 40px;
                transform: translate(10px, 43px);
            }
            
            .counter {
                position: absolute;
                transform: translate(260px, 35px);
                width: 70px;
                background: #FCEFE3;
                border-radius: 7px;
                border-width: 0px;
                color: #423835;
                box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.25);
                
                &:focus {
                    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.35);
                }
            }
            
            .plus {
                box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
                height: 26px;
                width: 26px;
                background-color: #FCEFE3;
                border-radius: 13px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                transform: translate(320px, 20px);
                
                &:hover {
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
                    transition: 600ms;
                }
                
                &:active {
                    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
                    transition: 100ms;
                    transform: translate(320px, 21px);
                }
            }
            
            .minus {
                box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
                height: 26px;
                width: 26px;
                background-color: #FCEFE3;
                border-radius: 13px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                transform: translate(320px, 50px);
                
                &:hover {
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
                    transition: 600ms;
                }
                
                &:active {
                    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
                    transition: 100ms;
                    transform: translate(320px, 51px);
                }
            }
            
            .line-minus {
                width: 10px;
                height: 1px;
                position: absolute;
                background: #9B7660;
                border: 1px solid #9B7660;
            }
            
            .line-plus {
                width: 10px;
                height: 1px;
                position: absolute;
                background: #9B7660;
                border: 1px solid #9B7660;
                transform: rotate(90deg);
            }
            
            .add-to-cart {
                position: absolute;
                transform: translate(-140px, 15px);
                background: #9B7660;
                box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                border-radius: 7px;
                width: 130px;
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
                    transform: translate(-140px, 16px);
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                }
            }
            
            .small-header {
                color: #FFCAAF;
                font-size: 25px;
            }
            
            .comment {
                width: 500px;
                text-align: left;
                color: #EEAE8C;
                padding: 0;
                margin: 0;
            }
            
            @media screen and (max-width: 600px) {
                .info-back {
                    transform: scale(0.9);
                    margin-top: 30px;
                }
            }
        `;

        return (
            <Styles>
                <div className="shopItemBack">
                    <Nav.Link href={data.back_link} className="left">
                        <div className="line1-back"></div>
                        <div className="line2-back"></div>
                    </Nav.Link>
                    <div className="back-for-pic">
                        <div className="pic">
                        </div>
                        <div className={style(data.special)}>
                            Special
                        </div>
                    </div>
                    <div className="info-back">
                        <h1 className="name">
                            { data.name }
                        </h1>
                        <div className="line">
                            <p className="price">
                                { data.price }
                            </p>
                            <Form.Control className="counter" placeholder="1 pcs"/>
                            <Nav.Link href="#"className="minus">
                                <div className="line-minus"></div>
                            </Nav.Link>
                            <Nav.Link href="#"className="plus">
                                <div className="line-minus"></div>
                                <div className="line-plus"></div>
                            </Nav.Link>
                            <NavItem>
                                <Nav.Link className="add-to-cart">
                                    Add to cart
                                </Nav.Link>
                            </NavItem>
                        </div>
                        <h2 className="small-header">Safety</h2>
                        <p className="comment">All of the toys are made from non-allergic wool, and it is completely safe for kids</p>
                        <h2 className="small-header">Color</h2>
                        <p className="comment">Every toy can be implemented in a unique color of your choice</p>
                        <h2 className="small-header">Time</h2>
                        <p className="comment">If a toy is not in stock, it will take about 5-7 days to make</p>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ShopItemPage;
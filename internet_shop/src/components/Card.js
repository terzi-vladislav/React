import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function style (special) {
    if (special) {
        return ("special");
    } else {
        return ("not-special");
    }
}

class Card extends Component {
    render() {
        const { src, name, theme, link, margin_bottom, margin_lr, price, special, back_link } = this.props;

        const Styles = styled.div`
            .light-card {
                width: 293px;
                height: 440px;
                border-radius: 30px;
                margin: ${margin_lr};
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Sans-Serif;
                font-size: 55px;
                background: #FCEFE3;
                color: #423835;
                border-width: 0px;
                box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                padding-bottom: 150px;
                margin-bottom: ${margin_bottom};
                
                &:hover {
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.8);
                     -webkit-transform: scale(1.05);
                    -ms-transform: scale(1.05);
                    transform: scale(1.05);
                    webkit-transition: all 0.5s ease;;
                    -moz-transition: all 0.5s ease;;
                    -o-transition: all 0.5s ease;;
                    transition: all 0.5s ease;
                }
                
                &:active {
                    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
                    transition: 100ms;
                    transform: translate(0px, 5px);
                }
            }
            
            @media all and (max-width: 1000px) {
                .light-card {
                    width: 440px;
                    height: 160px;
                    flex-direction: row;
                    justify-content: flex-start;
                    font-size: 50px;
                    padding: 0;
                    padding-left: 20px;
                    margin-bottom: 30px;
                    margin-top: 0;
                    }
                }
            }
            
            @media all and (max-width: 600px) {
                .light-card {
                    font-size: 40px;
                    width: 350px;
                }
            }
            
            .brown-card {
                width: 293px;
                height: 440px;
                border-radius: 30px;
                margin: ${margin_lr};
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Sans-Serif;
                font-size: 55px;
                background: #9B7660;
                color: #FCEFE3;
                border-width: 0px;
                box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                padding-bottom: 150px;
                margin-bottom: ${margin_bottom};
                
                &:hover {
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.8);
                     -webkit-transform: scale(1.05);
                    -ms-transform: scale(1.05);
                    transform: scale(1.05);
                    webkit-transition: all 0.5s ease;;
                    -moz-transition: all 0.5s ease;;
                    -o-transition: all 0.5s ease;;
                    transition: all 0.5s ease;
                }
                
                &:active {
                    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
                    transition: 100ms;
                    transform: translate(0px, 5px);
                }
            }
            
            @media all and (max-width: 1000px) {
                .brown-card {
                    color: #423835;
                    width: 440px;
                    height: 160px;
                    flex-direction: row;
                    justify-content: flex-start;
                    font-size: 50px;
                    padding: 0;
                    padding-left: 20px;
                    margin-bottom: 30px;
                    margin-top: 0;
                    }
                }
            }
            
            @media all and (max-width: 600px) {
                .brown-card {
                    font-size: 40px;
                    width: 350px;
                }
            }
            
            .dark-card {
                width: 293px;
                height: 440px;
                border-radius: 30px;
                margin: 40px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Sans-Serif;
                font-size: 55px;
                background: #423835;
                color: #FCEFE3;
                border-width: 0px;
                padding-bottom: 150px;
                box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
                
                &:hover {
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.8);
                     -webkit-transform: scale(1.05);
                    -ms-transform: scale(1.05);
                    transform: scale(1.05);
                    webkit-transition: all 0.5s ease;;
                    -moz-transition: all 0.5s ease;;
                    -o-transition: all 0.5s ease;;
                    transition: all 0.5s ease;
                }
                
                &:active {
                    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
                    transition: 100ms;
                    transform: translate(0px, 5px);
                }
            }
            
            @media all and (max-width: 1000px) {
                .dark-card {
                    width: 440px;
                    height: 160px;
                    border-radius: 30px;
                    margin-bottom: 30px;
                    margin-top: 0;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    font-family: Sans-Serif;
                    font-size: 40px;
                    background: #423835;
                    color: #423835;
                    border-width: 0px;
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                    padding: 0;
                    padding-left: 20px;
                }
            }
            
            @media all and (max-width: 600px) {
                .dark-card {
                    font-size: 40px;
                    width: 350px;
                }
            }
        
            .p {
                position: absolute;
                transform: translate(0px, 180px) rotate(-7deg);
            }
           
            @media all and (max-width: 1000px) {
                .p {
                    border-radius: 7px;
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                    text-align: center;
                    background-color: #FCEFE3;
                    position: absolute;
                    transform: translate(180px, 0px);
                    padding-left: 15px;
                    padding-right: 15px;
                }
            }
            
            @media all and (max-width: 600px) {
                .p {
                    transform: translate(150px, 0px);
                }
            }
            
            .pic {
                background-image: url(${src});
                width: 220px;
                height: 220px;
                box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
                border-radius: 110px;
                background-size: cover;
            }
            
            @media screen and (max-width: 1000px) {
                .div {
                    width: 100px;
                    height: 110px;
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                }
                
                .pic {
                    width: 130px;
                    height: 130px;
                }
            }
            
            .price {
                position: absolute;
                font-size: 23px;
                transform: translate(0px, 250px);
            }
            
            @media screen and (max-width: 1000px) {
                .price {
                    border-radius: 7px;
                    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
                    text-align: center;
                    background-color: #FCEFE3;
                    transform: translate(25px, 70px);
                    padding-left: 15px;
                    padding-right: 15px;
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
                transform: translate(110px, -140px);
            }
            
            @media screen and (max-width: 1000px) {
                .special {
                    transform: translate(180px, -70px);
                }
            }
            
            @media screen and (max-width: 600px) {
                .special {
                    transform: translate(150px, -70px);
                }
            }
            
            
            .not-special {
                display: none;
            }
        `;

        return (
            <Styles>
                <Link
                    to={{
                        pathname: link,
                        data: { src, name, price, special, back_link }
                    }} className={theme}>
                    <div className="pic">
                    </div>
                    <div className="p">
                        { name }
                    </div>
                    <div className="price">
                        { price }
                    </div>
                    <div className={style(special)}>
                        Special
                    </div>
                </Link>
            </Styles>
        );
    }
}

export default Card;
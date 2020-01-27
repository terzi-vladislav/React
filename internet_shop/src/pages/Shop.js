import React from 'react';
import { JumboShop } from "../components/JumboShop";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import Card from "../components/Card";

const Styles = styled.div`
    .shopBack1 {
        padding-top: 90px;
        width: 100%;
        background-color: #423835;
        display: flex;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
        flex-direction: column;
        padding-bottom: 70px;
    }
    
    .sort {
        position: absolute;
        width: 236px;
        height: 49px;
        background: #9B7660;
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

export const Shop = () => (
    <Styles>
        <JumboShop/>
        <div className="shopBack1" id="allItems">
            <div className="sort">Sort
                <Nav.Link className = "down-small">
                    <div className="line1-small"></div>
                    <div className="line2-small"></div>
                </Nav.Link>
            </div>
            <div className="cards">
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-45.userapi.com/c856036/v856036326/1c966c/d2Gm57khfV4.jpg"}
                    name={"Tilda"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"5000₽"}
                    special={true}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-60.userapi.com/c858424/v858424861/143226/Dr0CP2L_LFM.jpg"}
                    name={"Fidget"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"2000₽"}
                    special={true}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-16.userapi.com/c858424/v858424960/140f99/pTkVhPBk00U.jpg"}
                    name={"Seal"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"1900₽"}
                    special={true}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-43.userapi.com/c858424/v858424960/140fad/wCgdugpWMGM.jpg"}
                    name={"Ship"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"1700₽"}
                    special={true}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-26.userapi.com/c858424/v858424960/140fa3/v3ROed5E5SA.jpg"}
                    name={"Cactus #1"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"600₽"}
                    special={false}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-1.userapi.com/c858424/v858424960/140f8f/BxWxBbJ25sE.jpg"}
                    name={"Opuntia"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"600₽"}
                    special={false}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-20.userapi.com/c858424/v858424960/140fc1/Xo3LU50g3UA.jpg"}
                    name={"Hypo"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"700₽"}
                    special={false}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-15.userapi.com/c856036/v856036816/1c8472/nkVEX2oDsRk.jpg"}
                    name={"Dino"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"1000₽"}
                    special={false}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-67.userapi.com/c854024/v854024960/1cbe84/rvBv33kI1vk.jpg"}
                    name={"Parrot"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"900₽"}
                    special={false}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-28.userapi.com/c858424/v858424960/140fcb/DrQDDYaD2nw.jpg"}
                    name={"Hedgehog"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"600₽"}
                    special={false}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-53.userapi.com/c854024/v854024960/1cbe7a/dKrPlQWPkV8.jpg"}
                    name={"Whale"}
                    theme={"light-card"}
                    margin_lr={"30px"}
                    margin_bottom={"30px"}
                    price={"500₽"}
                    special={false}
                    back_link={"/shop"}/>
                <Card
                    link={"/shop-item-page"}
                    src={"https://sun9-19.userapi.com/c858424/v858424861/143230/IoxjAqt3H_U.jpg"}
                    name={"Elephant"}
                    theme={"light-card"}
                    margin_bottom={"30px"}
                    margin_lr={"30px"}
                    price={"1500₽"}
                    special={false}
                    back_link={"/shop"}/>
            </div>
        </div>
    </Styles>
)
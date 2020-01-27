import React from 'react';
import { JumboHome } from "../components/JumboHome";
import { Form, Row, Col, Button, Nav } from "react-bootstrap";
import styled from "styled-components";
import Card from "../components/Card";

const Styles = styled.div`
    .homeBack1 {
        background-color: #423835;
        display: flex;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
        flex-direction: column;
    }
    
    .categories {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .header1 {
        font-family: Sans-Serif;
        font-size: 55px;
        color: #FCEFE3;
    } 
    
    .cards {
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
    
    .homeBack2 {
        background-color: #FCEFE3;
        display: flex;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
        flex-direction: column;
        align-items: center;
    }
    
    .author {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .header2 {
        font-family: Sans-Serif;
        margin-top: 15px;
        font-size: 55px;
        color: #9B7660;
    }
    
    .author-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 110px;
    }
    
    @media all and (max-width: 1000px) {
        .author {
            height: 100px;
        }
        
        .header2 {
            font-size: 40px;
        } 
        
        .author-info {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
    }
    
    @media all and (max-width: 600px) {
        .author-info {
            margin-bottom: 0px;
        }
    }
    
    .info {
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 60px;
        align-items: center;
    }
    
    .info-text {
        width: 600px;
        height: 250px;
        background-color: #423835;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        font-size: 19px;
        line-height: 22px;
        display: flex;
        align-items: center; 
        color: #FCEFE3;
        padding: 30px;
        margin-bottom: 20px;
        margin-top: 50px;
    }
    
    @media all and (max-width: 600px) {
        .info-text {
            width: 420px;
            height: 310px;
        }
    }
    
    @media all and (max-width: 1000px) {
        .info {
            margin: 0;
        }
        .info-text {
            margin: 0px;
            margin-bottom: 20px;
        }
    }
    
    .text {
        width: 450px;
        text-align: center;
        font-size: 18px;
        line-height: 21px;
    }
    
     @media all and (max-width: 670px) {
        .text {
            width: 420px;
            font-size: 16px;
            line-height: 20px;
        }
    }
    
    .homeBack3 {
        background-color: #9B7660;
        display: flex;
        flex-direction: column;
        margin-top: 0;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.55);
        padding-bottom: 90px;
    }
    
    .placement {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    
    .header3 {
        font-family: Sans-Serif;
        font-size: 55px;
        color: #FCEFE3;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
    
    @media all and (max-width: 1000px) {
        .placement {
            height: 100px;
        }
        
        .header3 {
            font-family: Sans-Serif;
            font-size: 40px;
            color: #FCEFE3;
            text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        }
    }
    
    .addr-form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
    .address {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .map {
        width: 530px;
        height 380px;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        background: url(https://sun9-54.userapi.com/c856036/v856036816/1c8490/VccG7WX6xFw.jpg);
        background-size: cover;
        margin-bottom: 15px;
        
        &:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
             -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
            webkit-transition: all 0.5s ease;
            -moz-transition: all 0.5s ease;
            -o-transition: all 0.5s ease;
            transition: all 0.5s ease;
        }
        
        &:active {
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.55);
            transition: 100ms;
            transform: translate(0px, 5px);
        }
    }
    
    @media all and (max-width: 600px) {
        .map {
            width: 440px;
            height 300px;
        }
    }
    
    .addr {
        text-align: center;
        font-size: 18px;
        line-height: 21px;
        color: #FCEFE3;
    }
    
    .envelope {
        height 365px;
        width: 500px;
        background: url(https://enveco.co.uk/wp-content/uploads/2019/03/ecoKraft.png);
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 50px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.35);
        margin-bottom: 35px;
    }
    
    @media all and (max-width: 1100px) {
        .addr-form {
            margin-top: -15px;
            flex-direction: column;
        }
        
        .envelope {
            margin-left: 0px;
            margin-top: 20px;
        }
    }
    
    @media all and (max-width: 600px) {
        .envelope {
            margin-top: 20px;
            transform: scale(0.95);
        }
    }
    
    .fields {
        position: absolute;
    }
    
    .name-place {
        width: 170px;
        background: #FCEFE3;
        border-radius: 10px;
        border-width: 0px;
        color: #423835;
        box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.25);
        
        &:focus {
            box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.35);
        }
    }
    
    @media all and (max-width: 600px) {
        .envelope {
            margin-left: 0px;
            margin-top: 20px;
        }
    }
    
    .message {
        color: #423835;
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        width: 380px;
        height: 150px;
        margin: 10px;
        border-radius: 10px;
        border-width: 0px;
        background: #FCEFE3;
        border-style: none;
        box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.25);
        
        &:focus {
            box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.35);
            outline: -webkit-focus-ring-color auto 5px;
            outline-color: -webkit-focus-ring-color;
            outline-style: auto;
            outline-width: 0px;
        }
    }
    
    .letter {
        height: 200px;
        width: 350px;
        margin-top: 30px;
        margin-left: 49px;
        margin-bottom: 20px;
    }
    
    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
        color: #fff;
        background-color: rgba(0, 0, 0, 0);
        border-color: #005cbf;
        transform: scale(1.05) translate(0, 90px);
        color: #490E0A;
        text-shadow: 0px 0px 1px rgba(255, 250, 250, 0.25);
    }
    
    .btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        transform: scale(1.05) translate(0, 90px);
        color: #490E0A;
        text-shadow: 0px 0px 1px rgba(255, 250, 250, 0.25);
    }
    
    .btn-primary.focus, .btn-primary:focus {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        transform: scale(1.05) translate(0, 90px);
        color: #490E0A;
        text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.25);
    }

    .send {
        width: 84.9px;
        height: 90px;
        background: url(https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-216b5258c27fb864c368f1aee4c5459e.png);
        background-size: cover;
        border-width: 0px;
        shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
        position: absolute;
        transform: translate(0, 94px);
        color: #FCEFE3;
        
        &:hover {
            shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.35);
            outline: -webkit-focus-ring-color auto 5px;
            outline-color: -webkit-focus-ring-color;
            outline-style: auto;
            outline-width: 0px;
            border-width: 0px;
        }
        
        &:focus {
            shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.35);
            outline: -webkit-focus-ring-color auto 5px;
            outline-color: -webkit-focus-ring-color;
            outline-style: auto;
            outline-width: 0px;
            border-width: 0px;
        }
        
        &:active {
            transform: scale(1.05);
            color: #490E0A;
            text-shadow: 0px 0px 1px rgba(255, 250, 250, 0.25);
            webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
    }
    
    .text2 {
        width: 440px;
        color: #FCEFE3;
        position: absolute;
        text-align: center;
        transform: translate(0, 230px);
    }
`;

export const Home = () => (
    <Styles>
        <JumboHome/>
        <div className="homeBack1">
            <div className="categories">
                <h1 className="header1">Categories</h1>
            </div>
            <div className="cards">
                <Card
                    link={"/toys"}
                    src={"https://sun9-15.userapi.com/c856036/v856036816/1c8472/nkVEX2oDsRk.jpg"}
                    name={"Toys"}
                    theme={"light-card"}
                    margin_bottom={"120px"}
                    margin_lr={"40px"}/>
                <Card
                    link={"/cacti"}
                    src={"https://sun9-30.userapi.com/c856036/v856036816/1c8468/nmb2wOaEh14.jpg"}
                    name={"Cacti"}
                    theme={"light-card"}
                    margin_bottom={"120px"}
                    margin_lr={"40px"}/>
                <Card
                    link={"/special"}
                    src={"https://sun9-45.userapi.com/c856036/v856036326/1c966c/d2Gm57khfV4.jpg"}
                    name={"Special"}
                    theme={"light-card"}
                    margin_bottom={"120px"}
                    margin_lr={"40px"}/>
            </div>
        </div>
        <div className="homeBack2" id="about">
            <div className="author">
                <h1 className="header2">About the author</h1>
            </div>
            <div className="author-info">
                <Card
                    link={"https://www.instagram.com/marussia.toys/"}
                    src={"https://sun9-58.userapi.com/c856036/v856036326/1c9675/r3rGKUpIZ1Q.jpg"}
                    name={"Hello!"}
                    theme={"dark-card"}/>
                    <div className="info">
                        <div className="info-text">
                            My name is Marusya, and I love knitted toys. I am a young master and there is warmth and love in every stitch. <br/> <br/>
                            From a hobby knitting has turned into the meaning of life. <br/> <br/>
                            I now have the opportunity to bring joy not only to relatives, but also to you, my dear, which inspires me to make new toys. <br/> <br/>
                            I hope my crafts will make you happy!
                        </div>
                        <p className="text">
                            This web page is an opportunity to tell about one of the most important things in my life, toy knitting.
                        </p>
                    </div>
            </div>
        </div>
        <div className="homeBack3">
            <div className="placement">
                <h1 className="header3">I am here</h1>
            </div>
            <div className="addr-form">
                <div className="address">
                    <Nav.Link href="https://goo.gl/maps/SboMa3KQDCP37rG56">
                        <div className="map"></div>
                    </Nav.Link>
                    <a className="addr" href="https://goo.gl/maps/SboMa3KQDCP37rG56">Moscow, Sokolovo-Mescherskaya, 14</a>
                </div>
                <div className="envelope" id="faq">
                    <Form className="fields">
                        <Row>
                            <Col>
                                <Form.Control className="name-place" placeholder="Your name" />
                            </Col>
                            <Col>
                                <Form.Control className="name-place" placeholder="Email address" />
                            </Col>
                        </Row>
                        <Row>
                            <textarea type="text" id="materialFormMessageModalEx1" className="message" placeholder="Explain your problem here..."></textarea>
                        </Row>
                    </Form>
                    <Button className="send">
                        send
                    </Button>
                    <p className="text2">
                        If you run in any trouble or have some proposals for webpage improvement, feel free to fill in the form above.
                    </p>
                </div>
            </div>
        </div>
    </Styles>
)
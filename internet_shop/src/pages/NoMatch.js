import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
    .noMatchBack1 {
        padding-top: 90px;
        width: 100%;
        height: 771px;
        background-color: #FCEFE3;
        display: flex;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .not-found {
        font-size: 70px;
        color: #423835;
        text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
    }
    
    .warning {
        width: 50%;
        text-align: center;
        font-size: 25px;
        color: #423835;
    }
`;

export const NoMatch = () => (
    <Styles>
        <div className="noMatchBack1">
            <h1 className="not-found">404 NOT FOUND</h1>
            <p className="warning">Dear Sir or Madam, please check the page address, it seems like there is no match on our for that search</p>
        </div>
    </Styles>
)
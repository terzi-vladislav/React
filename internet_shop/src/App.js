import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop'
import { Toys } from './pages/Toys';
import { Cacti } from './pages/Cacti';
import { Special } from './pages/Special';
import { NoMatch } from './pages/NoMatch';
import ShopItemPage from './pages/ShopItemPage';
import NavigationBar from "./components/NavigationBar";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    font-family: Sans-Serif;
    height: 50px;
    background-color: #F2F2F2;
    box-shadow: inset  0px 0px 15px rgba(0, 0, 0, 0.45);
    color: #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    text-align: center;
    padding-right: 15px;
  }
    
    @media all and (max-width: 892px) {
      .footer {
        height: 70px;
      }
    }
    
    .instagram {
      text-decoration: none;
      cursor: pointer
      color: #BDBDBD; 
    }
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
          <Router>
            <Switch>
              <Route exact path={"/"} component={ Home } />
              <Route path={"/shop"} component={ Shop } />
              <Route path={"/toys"} component={ Toys } />
              <Route path={"/cacti"} component={ Cacti } />
              <Route path={"/special"} component={ Special } />
              <Route path={"/shop-item-page"} component={ ShopItemPage } />
              <Route component={ NoMatch } />
            </Switch>
          </Router>
        <Styles>
          <div className="footer">
            You can also support the project by subscribing on my instagram, as well as by ordering a toy for your darlings or yourself.
          </div>
        </Styles>
      </React.Fragment>
    );
  }
}

export default App;

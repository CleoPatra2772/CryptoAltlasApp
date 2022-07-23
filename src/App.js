import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navigation} from "./components/navigation/navigation.components";
import './App.css';
import { HomePage } from "./components/homepage/homepage.component";
import { Exchanges } from "./components/exchanges/exchanges.component";
import { Cryptocurrencies } from "./components/cryptocurrencies/cryptocurrencies.component";
import { CryptoDetails } from "./components/crypto-details/crypto-details.component";
import { News } from "./components/news/news.component";

 const App =() =>{
    return (
        <div className="app">
            <div className="nav-bar">
            <Navigation />
            </div>
            <div className="main">
            <div className="routes">
                <Routes>
                    <Route path="/"
                        element = {<HomePage />} />
                    <Route  path="/exchanges"
                        element = {<Exchanges />} />
                 
                    <Route  path="/cryptocurrencies"
                        element = {<Cryptocurrencies />} />
                  
                    <Route  path="/crypto/:coinId"
                        element = {<CryptoDetails />} />
                    
                    <Route  path="/news"
                        element = {<News />} />
                </Routes>
            </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )

}


export default App
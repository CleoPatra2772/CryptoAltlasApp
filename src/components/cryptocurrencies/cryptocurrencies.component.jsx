import React, { useState, useEffect } from 'react';
import millify from "millify";
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import { Card, Input } from 'antd';
import { useGetCryptosQuery } from "../../services/cryptoApi";
import './cryptocurrencies.styles.css';
import { Footer } from '../footer/footer.component';

export const Cryptocurrencies =({simplified}) =>{
    const count = simplified ? 10: 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [ cryptos, setCryptos ] = useState([]);
    const [ searchTerm, setSearchTerm] = useState('');
    console.log(cryptos);

    useEffect (() => {setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData);
    },
    [
        cryptosList, searchTerm
    ]);
    if(isFetching) return 'Loading...';

    return(
        <>
        {!simplified && (<div className='search-crypto'>
            <Input placeholder="Search Cryptocurrency" onChange= {(e) =>setSearchTerm (e.target.value)} />
        </div>)}
        
     
            <Row className='crypto-card-container'>
                {cryptos?.map((currency)=>(
                    <Col md={4} className='crypto-card' key={currency.id}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card className='card'
                            title={`${currency.rank}. ${currency.name}`}
                            extra={<img className='crypto-image' src={currency.iconUrl} />}
                            >
                            <div>Price: {Math.round(currency.price * 100) / 100}</div>
                            <div>Market Cap: {Math.round(currency.marketCap * 100) / 100}</div>
                            <div>Daily Change: {Math.round(currency.change * 100) / 100}%</div>
                            </Card>
                            

                            {/* <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {millify(currency.change)}%</p> */}
                        </Link>
                    </Col>
                ))}

            </Row>
           
        </>
    )
}
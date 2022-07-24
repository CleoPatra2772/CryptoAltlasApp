import React, { Fragment, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import {Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { LineChart } from '../line-chart/line-chart.component';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi';

const { Title, Text } = Typography;
const { Option } = Select;

export const CryptoDetails =() =>{
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timePeriod})
    const cryptoDetails = data?.data?.coin;

    if(isFetching) return 'Loading...';
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
      { title: 'Price to USD', value: `$ ${cryptoDetails?.price && (Math.round(cryptoDetails?.price * 100) / 100)}`, icon: <DollarCircleOutlined /> },
      { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
      { title: '24h Volume', value: `$ ${cryptoDetails?.volume && (Math.round(cryptoDetails?.volume * 100) / 100)}`, icon: <ThunderboltOutlined /> },
      { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && (cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && (cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
      { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
      { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && (Math.round(cryptoDetails?.supply?.total * 100) / 100)}`, icon: <ExclamationCircleOutlined /> },
      { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && (Math.round(cryptoDetails?.supply?.circulating * 100) / 100)}`, icon: <ExclamationCircleOutlined /> },
    ];

    return(
        <Fragment>
        <Col className='coin-detail-container'>
            <Col className='coin-heading-container'>
                <h2 className='coin-name'>
                    {data?.data?.coin.name}({data?.data?.coin.symbol}) Price </h2>
                    <p>
                        {data?.data?.coin.name} live price in US dollars.
                        View value statistics, market cap and supply.
                    </p>
                    <select 
                    defaultValue='7d' 
                    className='select-timeperiod' 
                    placeholder='Select Time Period'
                    onChange ={(value) => setTimePeriod(value)}
                    >
                    {time.map((date) => 
                    <option key={date}>{date}</option>)}
                    </select>
                    {/* <LineChart 
                    coinHistory={coinHistory} 
                    currentPrice={Math.round((data?.data?.coin.price) * 100) / 100}
                    coinName = {(data?.data?.coin.name)}
                    /> */}

                    <Col className='stats-container'>
                    <Col className='coin-value-statistics'>
                        <Col className='coin-value-statistics-heading'>
                            <h3 className= 'coin-details-statistics-heading'>
                                {data?.data?.coin.name} Value Statistics
                            </h3>
                            <p>An overview showing the stats of {data?.data?.coin.name} </p>
                        </Col>

                        {stats.map(({icon, title, value}) => 
                        <Col className='coin-stats'>
                            <Col className='coin-stats-name'>
                            <Text>{icon}</Text>
                            <Text>{title}</Text>
                            </Col>
                            <Text className='stats'>{value}</Text>
                        </Col>
                        
                        )}
                    </Col>
                    <Col className='other-statistics-info'>
                            <h3 className= 'coin-details-statistics-heading'>
                               Other Statistics
                            </h3>
                            <p>An overview showing stats of all cryptocurrencies</p>
                            
                        </Col>

                        {genericStats.map(({icon, title, value}) => 
                        <Col className='coin-stats'>
                            <Col className='coin-stats-name'>
                            <Text>{icon}</Text>
                            <Text>{title}</Text>
                            </Col>
                            <Text className='stats'>{value}</Text>
                        </Col>
                        
                        )}
                    </Col>
                    </Col>
                    <Col className='coin-desc-link'>
                        <Row className='coin-desc'>
                            <h3 className='coin-details-heading'>
                                What is {data?.data?.coin.name}?
                                 </h3>
                            <p>{HTMLReactParser(String(data?.data?.coin.description))}  </p> 
                            
                        </Row>
                    </Col>
                    <Col className='coin-links'>
                        <h3>{data?.data?.coin.name}</h3>
                        {data?.data?.coin.links.map((link) =>
                        <Row className='coin-link'>
                            <h5>{link.type}</h5>
                            <a href={link.url} target='_blank' rel='noreferrer'>{link.name}</a>
                        </Row>
                        )}
                    </Col>
            </Col>
   
        </Fragment>
    )
}
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Cryptocurrencies } from "../cryptocurrencies/cryptocurrencies.component";
import { News } from "../news/news.component";
import './homepage.styles.css';
import banner from '../../assets/images/crypto-coins.png';

const { Title } = Typography;

export const HomePage =() =>{
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading ...';

    return(
        <>
        <div className='home-container'>
        {/* <img className='banner-img' src={banner} alt='banner-img'/> */}
        <h1 className="heading">Welcome to CryptoAtlas* </h1>
        <h4><em>A site keeping up with the latest news and more</em></h4>
            {/* <h1 className="heading">Global Crypto Stats</h1> */}
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/>
        </Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify=(globalStats.totalExchanges)}/>
        </Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify=(globalStats.totalMarketCap)}/>
        </Col>
        <Col span={12}><Statistic title="Total 24h volume" value={millify=(globalStats.total24hVolume)}/>
        </Col> 
        <Col span={12}><Statistic title="Total Markets" value={millify=(globalStats.totalMarkets)}/>
        </Col>
            </Row>

            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            {/* <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to='/news'>Get Latest News</Link></Title>
            </div> */}

            <News simplified />
            </div>
        </>
    )
}
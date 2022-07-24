import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Cryptocurrencies } from "../cryptocurrencies/cryptocurrencies.component";
import { News } from "../news/news.component";
import './homepage.styles.css';
import { CarouselComponent } from "../carousel/carousel.component";
import statsLogo from '../../assets/images/stats.svg';
const { Title } = Typography;

export const HomePage =() =>{
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading ...';

    return(
        <>
        <div className='home-container'>
        {/* <img className='banner-img' src={banner} alt='banner-img'/> */}
        
        <CarouselComponent />
            <div className='global-stats'>
            <h1 className="heading">Global Crypto Stats🌎</h1>
            <img className='stats-logo' src={statsLogo} alt='stats-logo'/>
            <Row>
                <Col span={12}><Statistic  title="Total Cryptocurrencies" value={globalStats.total}/>
        </Col>
        <Col span={12}><Statistic  title="Total Exchanges" value={millify=(globalStats.totalExchanges)}/>
        </Col>
        <Col span={12}><Statistic  title="Total Market Cap" value={millify=(globalStats.totalMarketCap)}/>
        </Col>
        <Col span={12}><Statistic title="Total 24h volume" value={millify=(globalStats.total24hVolume)}/>
        </Col> 
        <Col span={12}><Statistic title="Total Markets" value={millify=(globalStats.totalMarkets)}/>
        </Col>
            </Row>
            </div>

            <div className='home-heading-container'>
                <h1 className='home-title'>🔥Top 10 Cryptocurrencies in the world🔥</h1>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
            
            <Cryptocurrencies simplified/>
            {/* <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to='/news'>Get Latest News</Link></Title>
            </div> */}
            </div>
            <div className='news'>
            <h1>Cryptocurrency News</h1>
            <News simplified />
            
            </div>
            </div>
        </>
    )
}
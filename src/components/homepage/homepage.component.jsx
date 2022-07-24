import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Cryptocurrencies } from "../cryptocurrencies/cryptocurrencies.component";
import { News } from "../news/news.component";
import './homepage.styles.css';
import { CarouselComponent } from "../carousel/carousel.component";
import statsLogo from '../../assets/images/stats.svg';
import { Footer } from "../footer/footer.component";
import newspaper from '../../assets/images/newspaper.svg';

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
                <Col span={12}><h3>Total Cryptocurrencies: {(globalStats.total).toLocaleString('en-US')} </h3>
        </Col>
        <Col span={12}><h3>Total Exchanges: {millify=(globalStats.totalExchanges).toLocaleString('en-US')}</h3>
        </Col>
        <Col span={12}><h3>Total Market Cap: {millify=(globalStats.totalMarketCap).toLocaleString('en-US')}</h3>
       
        </Col>
        <Col span={12}><h3>Total 24h volume: {millify=(globalStats.total24hVolume).toLocaleString('en-US')}</h3>
        
        </Col> 
        <Col span={12}><h3>Total Markets: {millify=(globalStats.totalMarkets).toLocaleString('en-US')}</h3>
       
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
            <h1>Cryptocurrency News📺</h1>
            <img className='news-logo' src={newspaper} alt='news-logo'/>
            <h3 className='news-description'>Be up-to-date on what's going on in the crypto world.</h3>
            <h3><Link to='/news'>Show more</Link></h3>

            {/* <News simplified /> */}
            
            </div>
            </div>
            <Footer />
        </>
    )
}
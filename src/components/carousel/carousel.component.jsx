import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/crypto-coins.png';
import slide2 from '../../assets/images/slide.png';
import slide3 from '../../assets/images/slide3.png';
import './carousel.styles.css';

export const CarouselComponent = () =>{

    return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='heading'>Welcome to CytproAtlas</h1>
          <p>A site keeping up with the latest crypto news and more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/cryptocurrencies'>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        </Link>

        <Carousel.Caption>
          <h3>Discover Cryptos</h3>
          <p>Discover your favorite crypto price and status.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/news'>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        </Link>

        <Carousel.Caption>
          <h3>Crypto, NFT, Blockchain News</h3>
          <p>
            Learn about what is happening everyday in the crypto world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}
import Carousel from 'react-bootstrap/Carousel';
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
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}
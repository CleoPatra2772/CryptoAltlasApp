import React from 'react';
import './news-item.styles.css';
import { Container, Col, Row } from 'react-bootstrap';

export const NewsItem = ({title, description, url, urlToImage}) => {

    return(

        <div className= 'news-app-container'>
        <Container>
        <Row className='news-row'>
         {/* <div className= 'news-app-container'> */}
        <Col xs={6} className='news-item'>
        <img className='news-img' src={urlToImage} alt={urlToImage} />
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
        </Col>
        </Row>
        </Container>

       
       
        </div>
    )
}
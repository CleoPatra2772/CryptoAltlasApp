import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../../assets/images/logo.svg';
import Container from 'react-bootstrap/Container';
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navigation.styles.css';

import 'bootstrap/dist/css/bootstrap.min.css'


export const Navigation = () => {
    return (
        <Navbar>
        <Container>
        <Navbar.Brand href="#home">CryptoAtlas*
        <img className= "logo" src={icon} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
                 <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
            <Link className='navigation-element' to="/"><span>Home</span></Link>
            <Link className='navigation-element'to="/cryptocurrencies"><span>CryptoCurrencies</span></Link>
            
            <Link className='navigation-element'to="/news"><span>News</span></Link>
         
          </Container>
         </Navbar>
    )
}

             /* <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoWorld</Link>
            </Typography.Title>
            
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />} />
                <Link to="/">Home</Link>

                
                <Menu.Item icon={<FundOutlined />} />
                <Link to="/cryptocurrencies">CryptoCurrencies</Link>

             
                <Menu.Item icon={<MoneyCollectOutlined />} />
                <Link to="/exchanges">Exchanges</Link>

                
                <Menu.Item icon={<BulbOutlined />} />
                <Link to="/news">News</Link>
                </Menu>
            <Button className='menu-control-container'>
            </Button>
           
    
      
        </Navbar>
    )
} */


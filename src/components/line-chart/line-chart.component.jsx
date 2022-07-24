import { Line } from 'react-chartjs-2';
import { Col, Row, Typography} from 'antd';
import { Fragment } from 'react';

export const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice =[];
    const coinTimestamp =[];

    for(let i =0; i< coinHistory?.data?.history?.length; i +=1){
        coinPrice.push(coinHistory.data.history[i].price);
        
    }

    for(let i =0; i< coinHistory?.data?.history?.length; i +=1){
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
      
    }

    const data ={
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '',
                borderColor: '',

            },

        ],
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return(
        <>
            <Row className='chart-header'>
                <h2 className='chart-title'>{coinName} Price Chart</h2>
                <Col className='price-container'>
                    <h5 className='price-change'>{coinHistory?.data?.change}</h5>
                    <h5 className='current-price'>Current{coinName} Price: ${currentPrice}</h5>
                </Col>
                
            </Row>
            <Line data={data} options={options} />
            
        </>
    )

}
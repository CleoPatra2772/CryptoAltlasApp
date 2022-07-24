import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
const { Text, Title } = Typography;
const { Option } = Select;


export const News =({ simplified }) => {
    const { data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10: 100 });

    if(!cryptoNews?.value) return 'Loading...';

    return(
        <div>
            <h1>This is news page</h1>
        </div>
    )
}


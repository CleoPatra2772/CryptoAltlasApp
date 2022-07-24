import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsItem } from './news-item.component';


export const News =() => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const getArticles = async() =>{
            const response = await axios.get('https://newsapi.org/v2/everything?q=crypto&from=2022-06-24&sortBy=publishedAt&apiKey=14b9e700d07049f98bc575183c2d5fa3');
            console.log(response);
            setArticles(response.data.articles);

        }
        getArticles()
        
    },[]);

    return (
            
        <div>
            {articles.slice(0,10).map((article) => {
                return (
                    <NewsItem 
                    key={article.id}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>

    );
      
}


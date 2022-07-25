import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsItem } from './news-item.component';
import { Loader } from '../loader/loader.component';


export const News =() => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const getArticles = async() =>{
            const response = await axios.get('https://newsapi.org/v2/everything?q=blockchain&from=2022-07-24&to=2022-07-24&sortBy=popularity&apiKey=14b9e700d07049f98bc575183c2d5fa3');
            console.log(response);
            if(!response){
                return <Loader />
            }else {
            setArticles(response.data.articles);
            }

        }
        getArticles()
        
    },[]);

    return (
            
        <div>
            {articles.slice(0,20).map((article) => {
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

            {/* {articles.slice(10,40).map((article) => {
                return (
                    <NewsItem 
                    key={article.id}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })} */}
        </div>

    );
        }
      


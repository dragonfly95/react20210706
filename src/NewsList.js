
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from './lib/usePromise';


const NewsList = ({category}) => {
    const [loading, response] = usePromise(()=> {
        const query = category==='all'? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fae663ac678c4f86b149dbf89dd980b3`
        );
    }, [category]);
    if(loading) {
        return (
            <NewsListBlock>
                대기중..
            </NewsListBlock>
        )
    }
    if (!response) {
        return null;
    }

    let articles = response.data.articles;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}


const NewsListBlock  = styled.div`
  box-sizing: border-box;
  padding-bottom:3rem;
  width:768px;
  margin:0 auto;
  margin-top:2rem;
  @media screen and (max-width:768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }    
`;

export default NewsList
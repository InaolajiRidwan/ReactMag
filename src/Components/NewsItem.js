import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

const NewsItem = (props) => {
  const [newsBulletin, setNewsBulletin] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=9508b8e6de7b4bfeac010fdccf0e288f`;
    // )
    Axios.get(url)

      .then((res) => {
        setNewsBulletin(res.data.articles);
      })
      .catch((error) => {
        console.error("error fecting data", error);
      });
  }, [props.category]);

  return (
    <div>
      <div>
        {newsBulletin.map((articles, index) => {
          return (
            <div>
              <h1>{articles.title}</h1>
              <h1>{articles.description}</h1>
              <img src={articles.urlToImage} alt='hey' />
              <a href={articles.url}>ReadMore</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsItem
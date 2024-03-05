import React from "react";
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
      <div className="mt-3">
        <h2>
          Latest <span className="bg-danger text-white">News</span>
        </h2>

        {newsBulletin.map((articles, index) => {
          return (
            // <div>
            //   {/* <div
            //     className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
            //     style={{ width: "310px" }}
            //   >
            //     <img
            //       src={articles.urlToImage ? articles.urlToImage : "hfhfh"}
            //       class="card-img-top"
            //       alt="..."
            //     />
            //     <div class="card-body">
            //       <h5 class="card-title">{articles.title}</h5>
            //       <p class="card-text">{articles.description}</p>
            //       <a href={articles.url} class="btn btn-primary">
            //         ReadMore
            //       </a>
            //     </div>
            //   </div> */}

            //   {/* <h1>{articles.title}</h1>
            //   <h1>{articles.description}</h1>
            //   <img src={articles.urlToImage} alt="hey" />
            //   <a href={articles.url}>ReadMore</a> */}
            // </div>

            <div
              className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
              style={{ maxWidth: "310px" }}
            >
              <img
                src={articles.urlToImage ? articles.urlToImage : ""}
                style={{
                  height: "200px",
                  width: "290px",
                  border: "1px solid white",
                }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{articles.title.slice(0, 50)}</h5>
                <p className="card-text">
                  {articles.description
                    ? articles.description.slice(0, 90)
                    : "Infromation about something that just happened "}
                </p>
                <a href={articles.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsItem;

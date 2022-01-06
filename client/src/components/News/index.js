import React, { useEffect } from "react";

const apiUrl =
  "https://api.sportsdata.io/v3/nfl/scores/json/News?key=8d47ddc73491478086570cc47316de1b";

function News() {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  });
  if (!post) return null;

  return post.map((post) => {
    return (
      <section className ="container" id="card" key={post.data}>
        <h1 className="info-news" id="title">{post.title}</h1>
        <p className ="news-info" id="content">{post.content}</p>
      </section>
    );
  });
}

export default News;

// https://api.sportsdata.io/v3/nfl/scores/json/News?key=8d47ddc73491478086570cc47316de1b

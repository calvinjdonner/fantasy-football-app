import React, { useEffect, useState } from "react";
import "react-toggle/style.css"

function getNews() {
  const [post, setPost] = useState();
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://api.sportsdata.io/v3/nfl/scores/json/News?key=8d47ddc73491478086570cc47316de1b";
    fetch(url).then(data => data.json())
      .then(data => {
        console.log(data);
        setPost(data.news);
        setLoading(false);
      })
  });

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index);
  };
  return (
    <div className="newsSearch">
      {!loading && post.filter((val) => {
        return val
      }).map((post, index) => {
        return (
          <section onClick={() => toggle(index)} className="container" id="card" key={index}>
            <h4 className="newsTitle" id="title">{post.title}</h4>
            <p className="info" id="content">{post.content}</p>

          </section>
        )
      })}
    </div>
  );
}

// const apiUrl =
//   "https://api.sportsdata.io/v3/nfl/scores/json/News?key=8d47ddc73491478086570cc47316de1b";

// function News() {
//   const [post, setPost] = React.useState(null);

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((data) => data.json())
//       .then((data) => {
//         console.log(data);
//         setPost(data);
//       });
//   });
//   if (!post) return null;

//   return post.map((post) => {
//     return (
//       <section className="container" id="card" key={post.data}>
//         <h1 className="info-news" id="title">{post.title}</h1>
//         <p className="news-info" id="content">{post.content}</p>
//       </section>
//     );
//   });
// }

export default getNews;

// https://api.sportsdata.io/v3/nfl/scores/json/News?key=8d47ddc73491478086570cc47316de1b

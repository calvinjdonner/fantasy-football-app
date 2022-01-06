import Axios from "axios";
import React from "react";

function News() {
  const nflNews = () => {
    Axios.get(
      "https://api.sportsdata.io/v3/nfl/scores/json/News?key=8d47ddc73491478086570cc47316de1b"
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <section>
      <div>
        News <button onClick={nflNews}>Get NFL news now</button>
      </div>
    </section>
  );
}

export default News;

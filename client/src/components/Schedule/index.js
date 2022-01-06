import React, { useEffect, useState } from "react";

const apiUrl =
  "https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2021/18?key=8d47ddc73491478086570cc47316de1b";

function Schedule() {
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
      <section className="container" id="card" key={post.data}>
        <h1 className="away-team" id="awayteam">{post.AwayTeam}</h1>
        <p className="home-team" id="hometeam">{post.HomeTeam}</p>
      </section>
    );
  });
}

export default Schedule;

// https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2021/18?key=8d47ddc73491478086570cc47316de1b

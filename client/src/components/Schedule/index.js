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
  } ,[]);
  if (!post) return null;

  return post.map((post, i) => {
    return (
      <section key={i} className="container" id="containers">
        <div className="schedule-card" id="card" key={`${i}2`}>
          <p className="away-team" id="awayteam" key={`${i}3`}>
            Away Team - {post.AwayTeam}
          </p>
          <p className="home-team" id="hometeam" key={`${i}4`}>
            Home Team - {post.HomeTeam}
          </p>
          <span />
          <p className="day-date" id="date" key={`${i}5`}>
            Date {post.Date}
          </p>
          <p className="forecast-wind" id="forecastwind" key={`${i}6`}>
            {" "}
            Wind speed - {post.ForecastWindSpeed + " mph"}
          </p>
        </div>
      </section>
    );
  });
}

export default Schedule;

// https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2021/18?key=8d47ddc73491478086570cc47316de1b
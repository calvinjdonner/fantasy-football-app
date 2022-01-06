import Axios from "axios";
import React from "react";

function Schedule() {
  const nflSchedule = () => {
    Axios.get(
      "https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2021/18?key=8d47ddc73491478086570cc47316de1b"
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <section className="my-5">
      <h1 id="schedule">NFL Schedule</h1>
      <div className="my-2"></div>
      <div>
        NFL Schedule <button onClick={nflSchedule}></button>
      </div>
    </section>
  );
}

export default Schedule;

// https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2021/18?key=8d47ddc73491478086570cc47316de1b

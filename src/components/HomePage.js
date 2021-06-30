import axios from "axios";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://destiny-player-library-default-rtdb.firebaseio.com/.json")
      .then((res) => {
        setData(Object.entries(res.data))
        console.log(data)
     

      });
  }, []);
        return (
        <div>
            <h1> Destiny Players </h1>
            {data.map((player, i) => (
              <div>
                <h3> Player {i} : {player[0]}</h3>
                <p>Light Level : {player[1].currentLightLevel} </p>
                <p>Join Date : {player[1].joinDate} </p>
                <p>Platform : {player[1].platform} </p>
              </div>
            ))}
        </div>
        );  
}

export default HomePage;

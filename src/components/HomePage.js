import axios from "axios";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://destiny-player-library-default-rtdb.firebaseio.com/.json")
      .then((res) => {
     //   setData(res.data);
        const {SinfulKillz, JimmyBuckets} = res.data;
        data.push(SinfulKillz, JimmyBuckets )
        console.log(data);
        setData(data);
/*         console.log(SinfulKillz.userName);
        console.log(SinfulKillz.platform);
 */
        
      });
  }, [data]);

  
     
 

  console.log(Object.entries(data));

  data.map(player => {
        return (<div>{player}</div>);
  })
  

/*   return (
    <div>
        <p>hello</p>
        {data.map(player => (
            
            <div>{player}</div>

        ))}
    </div>
  );
 */}

export default HomePage;

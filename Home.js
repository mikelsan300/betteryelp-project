import React from "react";
import { useState } from "react";
import RestList from "./RestList";


const Home = () => {

    const [rest, setRest] = useState([
        //This is placeholder for the API call
        {name: 'Restaurant 1', body: 'restaurant description 1', location: 'location 1', id: 1},
        {name: 'Restaurant 2', body: 'restaurant description 2', location: 'location 2', id: 2},
        {name: 'Restaurant 3', body: 'restaurant description 3', location: 'location 3', id: 3}
    ])

    return ( 
        <div className="home">
            <RestList rest={ rest } title="Top restaurants" />
        </div>
     );
}
 
export default Home;
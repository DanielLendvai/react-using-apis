import React from "react";

function Beer({ beerData }) {
    return (
        <div>
            <p className="beer-name">{beerData.name}</p>
            <p className="beer-tagline">{beerData.tagline}</p>
            <p>{beerData.abv} %</p>
            <img
            style={{width:"200px", height:"300px"}} 
            src={beerData.image_url} alt="alt" />
            
        </div>
    );
}

export default Beer;

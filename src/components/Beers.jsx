import Beer from "./Beer";

function Beers({beers, filter}) {
    

    return (
        <div className="beers">
            {beers
                .filter((beer) =>
                    beer.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map((beer, index) => (
                    <Beer key={index} beerData={beer} />
                ))}
        </div>
    );
}

export default Beers;

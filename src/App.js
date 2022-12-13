import { useEffect, useState } from "react";
import "./App.scss";
import Beers from "./components/Beers";
import LoadingMask from "./components/LoadingMask";

function App() {
    const [beers, setBeers] = useState([]);
    const [perPage, setPerPage] = useState(20);
    const [filter, setFilter] = useState("");
    const [sortByNumber, setSortByNumber] = useState("asc");
    const [sortByName, setSortByName] = useState("asc");

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?per_page=${perPage}`)
            .then((res) => res.json())
            .then((data) => {
                // setTimeout(() => {
                setBeers(data); //fetch adatokat egy state-be mentjük
                // }, 1000);
            });
    }, [perPage]);

    useEffect(() => {
        sortByNumber === "asc"
            ? // sort by numbers (beer alc volume)
              setBeers([...beers].sort((a, b) => a.abv - b.abv))
            : setBeers([...beers].sort((a, b) => b.abv - a.abv));
    }, [sortByNumber]);

    useEffect(() => {
        sortByName === "asc"
          ? setBeers([...beers].sort((a, b) => a.name > b.name ? 1 : -1)
            )
          : setBeers([...beers].sort((a, b) => a.name < b.name ? 1 : -1)
            );
      }, [sortByName])

    /* useEffect(() => {
        sortByName === "asc"
            ? // sort by name
              setBeers([...beers].sort((a, b) => b.name > a.name))
            : setBeers([...beers].sort((a, b) => a.name > b.name));
    }, [sortByName]); */

    console.log(beers);

    return (
        <div className="App">
            <div
                className="inputs"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "20px",
                    gap: "10px",
                }}
            >
                <input
                    type="number"
                    value={perPage}
                    onChange={(event) => {
                        setPerPage(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="filter"
                    value={filter}
                    onChange={(event) => {
                        setFilter(event.target.value);
                    }}
                />
            </div>
            <div
                className="buttons"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "20px",
                    gap: "30px",
                }}
            >
                <button
                    onClick={() => {
                        sortByNumber === "asc"
                            ? setSortByNumber("desc")
                            : setSortByNumber("asc");
                    }}
                >
                    Sort by number
                </button>

                <button
                    onClick={() => {
                        sortByName === "asc"
                            ? setSortByName("desc")
                            : setSortByName("asc");
                    }}
                >
                    Sort by name
                </button>
            </div>

            {/* conditional rendering. amíg nem tölt be a beers komponens, addig loadingMaskot jelenítünk meg */}
            {beers.length > 0 ? (
                <Beers filter={filter} beers={beers} />
            ) : (
                <LoadingMask />
            )}
        </div>
    );
}

export default App;

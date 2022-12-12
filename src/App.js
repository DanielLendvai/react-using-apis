import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [beers, setBeers] = useState("")

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=10")
    .then((res) => res.json())
    .then((data) => {
      setBeers(data); //fetch adatokat egy state-be mentjük
    })
  }, [])

console.log(beers)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

const express = require('express');
const path = require('path');
const fs = require('fs')
const app = express();

app.use(express.json());

/* app.get("/beers", (req,res) => {
    fs.readFile(`${__dirname}/data/beers.json`, function (err, data) {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          let beerData = JSON.parse(data);
          return res.send(beerData);
        }
      });
}) */

// ugyanaz mint feljebb, de fájl beolvasás nélkül.
app.get("/beers", (req,res) => {
    res.sendFile(path.join(`${__dirname}/data/beers.json`))
})

app.post("/beers/add", (req,res) => {
  console.log(req.body)
  res.status(200).json({"res":"ok"})
})

app.listen(9000,()=> {console.log("http://127.0.0.1:9000")})
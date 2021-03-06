const express = require(`express`);
const faker = require(`faker`);
const path = require(`path`);
const bodyParser = require(`body-parser`);

const app = express();
// middleware - software glue between backend and frontend
// middlewares are functions your requests "pass through"
// more on middleware in a few modules
app.use(bodyParser.json()); // throw any incoming request parameters in "req.body"
app.use(express.static(`public`)); // specified the html "static folder" as the public folder in our app


app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname + `/public/index.html`));
});

app.get(`/name`, (req, res) => {
  const randomName = faker.name.findName();
  res.json({name: randomName});
  // res.status(422).send({ error: `An Error Has Occured` })
});

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

console.log(`hello`);
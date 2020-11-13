// Setup empty JS object to act as endpoint for all routes

projectData = {};
// Require Express to run server and routes
const express = require('express');
const app = express();
// Start up an instance of app
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8085;
const server = app.listen(port,listentoport);
function listentoport()
{
    console.log(`server running on local host: ${port}`);
}
app.get('/all',(req, res)=>{
    res.send(projectData);
})
app.post('/add',(req, res)=>
{
    projectData["date"] = req.body.date;
    projectData["temp"] = req.body.temp;
    projectData["feel"]= req.body.feel;
    res.send(projectData);
})

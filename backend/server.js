const cors = require("cors");
const express = require("express");
const app = express();
//imports
const connection = require("./db");
const tasks = require("./routes/tasks");
/*
Note to self - could use import as well since import 
is asynchronous and it works a little better
*/

//run mongo
connection();
//set port
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasks);
app.use("*", (req,res)=> res.status(404).json({error: "not found"}))

app.listen(port, () => console.log(`Listening on port ${port}...`));
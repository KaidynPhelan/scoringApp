const express = require ('express');
const cors = require ('cors');

// Connecting to database
const mongoose = require ('mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

// Connecting to the database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


// Connecting routes to the server
const routes = require('./routes');
app.use('/', routes);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

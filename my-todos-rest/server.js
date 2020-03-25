const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const envs = require('./config/config');

const app = express();

const allowedOrigins = ['http://localhost:3000','http://127.0.0.1:3000'];

const corsOptions = (req, callback) => {
    if(allowedOrigins.indexOf(req.header('Origin'))!==-1){
        return callback(null, {origin:true});
    } else {
        return callback(null, {origin:false});
    }
};

mongoose.connect(envs.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`Connection created to ${envs.db}`);
},
()=>{
    console.log(`Unable to connect to ${envs.db}`);
});

app.use('*', cors(corsOptions));

// bodyparser for POST request body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/ping', (req, res) => res.send("Server is running."));

var port = envs.port || 8090;
app.listen(port, ()=>{
    console.log(`Daily Todos REST is running on port: ${port}`);
});


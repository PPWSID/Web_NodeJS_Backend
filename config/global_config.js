global.express = require("express")
global.cors    = require("cors")
global.mongoose = require("mongoose")
global.bodyParser = require('body-parser')
global.moment = require('moment')
global.GLOBAL_VALUE = process.env
global.fs = require('fs');
global.Schema = mongoose.Schema
require('dotenv').config()

const { NODE_ENV } = process.env
if (NODE_ENV == 'production') {
  require('dotenv').config({
    path: '.env'
  })
} else if (NODE_ENV == 'poc') {
  require('dotenv').config({
    path: 'poc.env'
  })
} else if (NODE_ENV == 'dev') {
  require('dotenv').config({
    path: 'dev.env'
  })
}

//--------------- Connect to Mongo ---------------//
const mongo_uri = GLOBAL_VALUE.MG_CONNECT
console.log(mongo_uri)
mongoose.connect(mongo_uri
  // , {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
    //useFindAndModify: false
// }
).then(() => {
    console.log("[success] task 2 connected to the mongo database ")
}).catch((error) => {
    console.log("[failed] task 2 " + error);
    process.exit();
})


const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

require('dotenv').config()

app.use(express.json())

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '54fe487c727144589f10dcffd524cc68',
  captureUncaught: true,
  captureUnhandledRejections: true
});


// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  };

  try {
   myFunction();
  } catch (error) {
    rollbar.log('user clicked!');
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  };






app.use('/', express.static(path.join(__dirname, '..client/index.html')))
app.use(express.static(path.join(__dirname, '../client')))














app.listen(port, () =>{
    console.log('Docked at port' + port)
})
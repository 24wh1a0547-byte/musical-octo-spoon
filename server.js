const express = require("express");
const app = express();
const PORT = process.env.PORT || 6700;

// to tell express where static files - html, css, js - are located
app.use(express.static("frontend"));
app.listen(PORT, function(){
    console.log("App is running on http://localhost:" + PORT);
});
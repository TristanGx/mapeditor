const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");

app.set("PORT", process.env.PORT || 5000);
app.use(favicon(__dirname + "/app/favicon.ico"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "app/index.html"));
});

app.get("/js/main.js", (req, res) => {
    res.sendFile(path.join(__dirname, "app/js/main.js"));
})

app.get("/css/main.css", (req, res) => {
    res.sendFile(path.join(__dirname, "app/css/main.css"));
})


app.listen(app.get("PORT"));
console.log("Server is listening at port:" + app.get("PORT"));
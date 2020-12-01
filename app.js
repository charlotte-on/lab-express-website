var express = require("express");
var hbs = require("hbs");
var app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Homepage",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About us",
    admins:[
      {
        name:"Charlotte Oury" ,
        age: 29,
        urlImage: '/images/Charlotte.jpg',
        link: "https://github.com/charlotte-on"
      },
      {
        name:"Xuan TRAN" ,
        age: 29,
        urlImage: '/images/xuan.jpg',
        link:"https://github.com/tranttxuan"
      }
    ]
  });
});

app.listen(4000, () => {
  console.log("Server is ready and accessible here : http://localhost:4000");
});

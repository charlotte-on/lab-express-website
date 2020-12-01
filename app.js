var express = require("express");
var hbs = require("hbs");
var app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.locals.copyright = `<p>Copyright © The cooking club 2020</p>`;

app.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Homepage",
    ingredients: [
      `3 bananas`,
      `100g of sugar`,
      `15g of almond powder`,
      `one pinch of salt`,
      `2g of cinnamon`,
      `3g of ginger`,
      `1 teaspoon of vanilla`,
      `60g of a neutral oil`,
      `165g of flour`,
      `5g of baking powder`,
    ],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "About us",
    admins: [
      {
        name: "Charlotte Oury",
        age: 29,
        urlImage: "/images/Charlotte.jpg",
        link: "https://github.com/charlotte-on",
      },
      {
        name: "Xuan TRAN",
        age: 29,
        urlImage: "/images/xuan.jpg",
        link: "https://github.com/tranttxuan",
      },
    ],
  });
});

app.listen(4000, () => {
  console.log("Server is ready and accessible here : http://localhost:4000");
});

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
    image: "/images/banana-bread.jpg",
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
    instructions: [
      "Preheat your oven at 160°C. Mash the bananas with a fork and add the sugar. Put the spices, the almond powder, salt and the oil. Gently add the flour and the baking powder.",
      "Grease and flour the baking dish, pour the mix in it and put it the oven 160°c. Leave it 40-50minutes in the oven, check with the tip of a knife.",
      "Let it cool a little bit, then film it and leave it to rest. If you can wait until the next day to eat it, it will be even better.",
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

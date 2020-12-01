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
    imageBanana: "/images/banana-bread.jpg",
    ingredientsBanana: [
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
    instructionsBanana: [
      "Preheat your oven at 160°C. Mash the bananas with a fork and add the sugar. Put the spices, the almond powder, salt and the oil. Gently add the flour and the baking powder.",
      "Grease and flour the baking dish, pour the mix in it and put it the oven 160°c. Leave it 40-50minutes in the oven, check with the tip of a knife.",
      "Let it cool a little bit, then film it and leave it to rest. If you can wait until the next day to eat it, it will be even better.",
    ],
    imageButternut: "/images/butternut.jpeg",
    ingredientsButternut: [
      "1 butternut squash",
      "20cl of coconut milk",
      "Water, depending on the size of the squash",
      "1 tbsp of curry",
    ],
    instructionsButternut: [
      "Peele the butternut, take the seeds out (you can keep them and grill them later). Dice it in small pieces, the smaller, the faster the soup will be ready.",
      "Add oil to the soup tureen and put on low heat, once it hot add the butternut. Cover it and let it cook for 2 minutes, then add the curry and leave it 5 minutes while stiring frequently.",
      "Add the coconut milk and cover it with water. Leave it for at least 30 minutes. You can mix it once it well cooked.",
    ],
    imageFalafel: "/images/falafel.jpg",
    ingredientsFalafel: [
      `Uncooked dried chickpeas`,
      `Shallot and garlic`,
      `Lemon zest`,
      `Cumin, coriander, and cayenne`,
      `Sea salt`,
      `Baking powder`,
      `Cilantro and parsley`,
      `Extra-virgin olive oil`,
    ],
    instructionsFalafel: [
      "Blend the ingredients. Add the falafel ingredients to a food processor, and pulse until well combined, but not pureed.",
      "Form the falafel balls. Use a 2-tablespoon cookie scoop and your hands to gently form the mixture into 12 to 15 thick patties.",
      "Bake! Drizzle the little cakes with olive oil, and bake, flipping halfway, until they’re golden brown and crisp.",
      "Serve, and enjoy! Stuff the cooked falafel into pitas with your favorite fixings, top them onto a salad, or serve them over a bowl. Then, dig in!",
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

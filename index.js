var TOTAL_SALE = 0;
var PRODUCTS = {
  skateboards: [
    {
      type: "skateboards",
      boardBrand: "Anti-Hero Skateboards",
      boardSize: 9.1,
      wheelSize: 63,
      wheelColor: "Red",
      price: 72.95,
      image: "images/skateboards/Anti1.jpeg",
    },
    {
      type: "skateboards",
      boardBrand: "Anti-Hero Skateboards",
      boardSize: 8.5,
      wheelSize: 59,
      wheelColor: "Green",
      price: 63.95,
      image: "images/skateboards/Anti2.jpeg",
    },
    {
      type: "skateboards",
      boardBrand: "Darkroom Skateboards",
      boardSize: 8.125,
      wheelSize: 52,
      wheelColor: "Black",
      price: 59.95,
      image: "images/skateboards/Darkroom1.jpeg",
    },
    {
      type: "skateboards",
      boardBrand: "Flip Skateboards",
      boardSize: 8.75,
      wheelSize: 62,
      wheelColor: "Orange",
      price: 70.95,
      image: "images/skateboards/Flip1.jpeg",
    },
    {
      type: "skateboards",
      boardBrand: "Flip Skateboards",
      boardSize: 9.25,
      wheelSize: 46,
      wheelColor: "Purple",
      price: 64.95,
      image: "images/skateboards/Flip2.jpeg",
    },
    {
      type: "skateboards",
      boardBrand: "Pizza Skateboards",
      boardSize: 8.25,
      wheelSize: 58,
      wheelColor: "Yellow",
      price: 67.95,
      image: "images/skateboards/Pizza1.jpeg",
    },
    {
      type: "skateboards",
      boardBrand: "Real Skateboards",
      boardSize: 9.5,
      wheelSize: 56,
      wheelColor: "Pink",
      price: 76.95,
      image: "images/skateboards/Real1.jpeg",
    },
    {
      type: "skateboards",
      boardBrand: "Real Skateboards",
      boardSize: 8.38,
      wheelSize: 74,
      wheelColor: "White",
      price: 69.95,
      image: "images/skateboards/Real2.jpeg",
    },
  ],
  // --------------------------------------------------------------
  backpacks: [
    {
      type: "backpacks",
      bagName: "DC Backsider Black Bandana Print Backpack",
      bagSize: "Large",
      waterproof: "No",
      price: 64.95,
      image: "images/backpacks/DC1.webp",
    },
    {
      type: "backpacks",
      bagName: "Element Mohave Galaxy Black Backpack",
      bagSize: "Medium",
      waterproof: "Yes",
      price: 54.95,
      image: "images/backpacks/Element1.webp",
    },
    {
      type: "backpacks",
      bagName: "Element Mohave Glazed Ginger Backpack",
      bagSize: "Small",
      waterproof: "Yes",
      price: 36.95,
      image: "images/backpacks/Element2.webp",
    },
    {
      type: "backpacks",
      bagName: "Element Mohave Flint Black Backpack",
      bagSize: "XL",
      waterproof: "No",
      price: 70.95,
      image: "images/backpacks/Element3.webp",
    },
    {
      type: "backpacks",
      bagName: "OATH Evermore Flat Black Backpack",
      bagSize: "Medium",
      waterproof: "Yes",
      price: 58.95,
      image: "images/backpacks/Evermore1.webp",
    },
    {
      type: "backpacks",
      bagName: "Nixon Gamma Navy & Orange Backpack",
      bagSize: "Large",
      waterproof: "No",
      price: 68.95,
      image: "images/backpacks/Nixon1.webp",
    },
    {
      type: "backpacks",
      bagName: "Nixon Gamma Black Backpack",
      bagSize: "XL",
      waterproof: "No",
      price: 74.95,
      image: "images/backpacks/Nixon2.webp",
    },
    {
      type: "backpacks",
      bagName: "Tasmanian Tiger Essential Pack Multicamo Backpack",
      bagSize: "Small",
      waterproof: "Yes",
      price: 30.95,
      image: "images/backpacks/Tiger1.webp",
    },
  ],
  // --------------------------------------------------------------
  shoes: [
    {
      type: "shoes",
      shoeName: "Converse Black & White Spider Tie Dye High Tops",
      shoeType: "Athletic",
      shoeSize: 11.5,
      price: 64.95,
      image: "images/shoes/Converse1.webp",
    },
    {
      type: "shoes",
      shoeName: "Converse Louie Lopez Mid Black & White Shoes",
      shoeType: "Athletic",
      shoeSize: 7.5,
      price: 70.95,
      image: "images/shoes/Converse2.webp",
    },
    {
      type: "shoes",
      shoeName: "New Balance Numeric 306 Foy White & Black Shoes",
      shoeType: "Athletic",
      shoeSize: 8.5,
      price: 66.95,
      image: "images/shoes/NewBalance1.webp",
    },
    {
      type: "shoes",
      shoeName: "New Balance Numeric 306 Jamie Foy Green & Red Shoes",
      shoeType: "Athletic",
      shoeSize: 10,
      price: 63.95,
      image: "images/shoes/NewBalance2.webp",
    },
    {
      type: "shoes",
      shoeName: "Nike SB Janoski RM Black & White Canvas Shoes",
      shoeType: "Athletic",
      shoeSize: 12,
      price: 71.95,
      image: "images/shoes/Nike1.webp",
    },
    {
      type: "shoes",
      shoeName: "Nike SB Nyjah Free 2.0 Summit White Shoes",
      shoeType: "Athletic",
      shoeSize: 9.0,
      price: 67.95,
      image: "images/shoes/Nike2.webp",
    },
    {
      type: "shoes",
      shoeName: "Vans Old Skool Pro BMX Black, Grey & White Shoes",
      shoeType: "Athletic",
      shoeSize: 8.0,
      price: 61.95,
      image: "images/shoes/Vans1.webp",
    },
    {
      type: "shoes",
      shoeName: "Vans Old Skool Mix & Match Black, White & Grey Shoes",
      shoeType: "Athletic",
      shoeSize: 13.0,
      price: 75.95,
      image: "images/shoes/Vans2.webp",
    },
  ],
  // --------------------------------------------------------------

  shirts: [
    {
      type: "shirts",
      shirtName: "Primitive x Dragon Ball Super Goku Black Rose Washed T-Shirt",
      shirtSize: "Small, Medium",
      price: 25.95,
      image: "images/shirts/backPrimitive1.webp",
    },
    {
      type: "shirts",
      shirtName: "Primitive Dirty P Tropics Sand T-Shirt",
      shirtSize: "Medium, Large, XL",
      price: 26.95,
      image: "images/shirts/backPrimitive2.jpeg",
    },
    {
      type: "shirts",
      shirtName: "Primitive x Dragon Ball Super Beerus Attack Cream T-Shirt",
      shirtSize: "Small, Large, XL",
      price: 29.95,
      image: "images/shirts/backPrimitive3.webp",
    },
    {
      type: "shirts",
      shirtName: "Primitive x Naruto Shippuden Madara Uchiha Grey T-Shirt",
      shirtSize: "Small, Large, XL",
      price: 27.95,
      image: "images/shirts/backPrimitive4.webp",
    },
  ],
  pants: [
    {
      type: "pants",
      pantsName:
        "Dickies Skateboarding Regular Fit Desert Sand Pants",
      pantsSize: "32-32, 34-34, 36-36",
      price: 50.95,
      image: "images/pants/dickies1.webp",
    },
    {
      type: "pants",
      pantsName: "Enjoi 40oz Denim Pine Pants",
      pantsSize: "32-32, 34-34, 36-36, 38-38",
      price: 48.95,
      image: "images/pants/enjoi1.webp",
    },
    {
      type: "pants",
      pantsName: "Enjoi Fader Denim Black Pants",
      pantsSize: "34-34, 36-36",
      price: 52.95,
      image: "images/pants/enjoi2.webp",
    },
    {
      type: "pants",
      pantsName: "New Deal Big Deal Brown Pants",
      pantsSize: "32-32, 34-34, 36-36",
      price: 46.95,
      image: "images/pants/newdeal1.webp",
    },
    {
      type: "pants",
      pantsName: "Theories Plaza Washed Blue Pants",
      pantsSize: "32-32, 36-36",
      price: 47.95,
      image: "images/pants/theories1.webp",
    },
    {
      type: "pants",
      pantsName: "Theories Stamp Lounge Cord Alpine Pants",
      pantsSize: "32-32, 36-36, 38-38",
      price: 43.95,
      image: "images/pants/theories2.webp",
    },
    {
      type: "pants",
      pantsName: "Vans Range Relaxed Elastic Black Pants",
      pantsSize: "32-32, 34-34, 36-36",
      price: 49.95,
      image: "images/pants/vans1p.webp",
    },
    {
      type: "pants",
      pantsName: "Vans Authentic Chino Relaxed Nutria Pants",
      pantsSize: "32-32, 34-34",
      price: 53.95,
      image: "images/pants/vans2p.webp",
    },
  ],
  hoodies: [
    {
      type: "hoodies",
      hoodieName: "Hunter x Hunter Gon Eye Green Tie Dye Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/hxh1.webp",
    },
    {
      type: "hoodies",
      hoodieName: "Jujutsu Kaisen Standing Gojo Black Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/jjk1.webp",
    },
    {
      type: "hoodies",
      hoodieName: "Nike SB Craft Black Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/nikesb1.webp",
    },
    {
      type: "hoodies",
      hoodieName: "Nike SB HBR GFX Black & Gold Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/nikesb2.webp",
    },
    {
      type: "hoodies",
      hoodieName: "Dragon Ball Super Goku Black Rose Washed Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/primitive1.webp",
    },
    {
      type: "hoodies",
      hoodieName: "Primitive Blossom Cream Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/primitive2.webp",
    },
    {
      type: "hoodies",
      hoodieName: "Thrasher Flame Logo Grey Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/thrasher1.webp",
    },
    {
      type: "hoodies",
      hoodieName: "Thrasher Flame Logo Black Hoodie",
      hoodieSize: "Small, Medium, Large",
      price: 75.95,
      image: "images/hoodies/thrasher2.webp",
    },
  ],
  hats: [
    {
      type: "hats",
      hatName: "Theories Hand of Theories Strapback Hat Rust/Plum",
      price: 14.95,
      image: "images/hats/Theories1.webp",
    },
    {
      type: "hats",
      hatName: "Theories Hand Of Theories Strapback Hat Hunter Green",
      price: 14.95,
      image: "images/hats/Theories2.webp",
    },
    {
      type: "hats",
      hatName: "Theories Final Gambit Snapback Forest Hat",
      price: 14.95,
      image: "images/hats/Theories3.webp",
    },
    {
      type: "hats",
      hatName: "Theories Northern Strapback Purple Hat",
      price: 14.95,
      image: "images/hats/Theories4.webp",
    },
    {
      type: "hats",
      hatName: "Theories Final Gambit Snapback Blue Hat",
      price: 14.95,
      image: "images/hats/Theories5.webp",
    },
    {
      type: "hats",
      hatName: "Theories Lantern Cord Strapback Vintage Brown Hat",
      price: 14.95,
      image: "images/hats/Theories6.webp",
    },
    {
      type: "hats",
      hatName: "Vans Curved Bill Jockey Black Hat",
      price: 14.95,
      image: "images/hats/Vans1.webp",
    },
  ],
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// Skateboard stufffff ------------------------------------
function skateboards(x) {
  return [
    '<div class="col-lg-3 col-sm-6 item-div">',
    '<div class="panel panel-default"><div class="panel-body">',
    '<p class="img-center"><img src="' + x.image + '"/></p>',
    "<p>Brand: " + x.boardBrand + "</p>",
    "<p>Board Size: " + x.boardSize + "in</p>",
    "<p>Wheel Size: " + x.wheelSize + "cm</p>",
    "<p>Wheel Color: " + x.wheelColor + "</p>",
    "<p>Price:  $" + x.price + "</p>",
    '<p class="img-center"><button onclick=\'addSkateboardsToCart(' +
      JSON.stringify(x) +
      ')\' type="button" class="btn btn-success skateboard-add-btn">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  ].join("");
}

function showSkateboards(itemtype) {
  $("#" + itemtype).removeClass("hide");
  $(".all-items").show();
  $(".products").hide();
  $("#cart").addClass("hide").removeClass("show");

  var html =
    '<h1 id="clothing-title">' +
    capitalizeFirstLetter(itemtype) +
    "</h1><br>" +
    PRODUCTS[itemtype]
      .map(function (x) {
        return skateboards(x);
      })
      .join("");
  $("#" + itemtype)
    .html(html)
    .show();
}

function addSkateboardsToCart(x) {
  TOTAL_SALE += x.price;
  var html =
    '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + "</p>";
  html += TOTAL_SALE + $(".navbar-cart").html(html);
  $("#cart").prepend(
    '<div class="col-lg-3 col-sm-6 item-div">' +
      '<div class="panel panel-default"><div class="panel-body">' +
      '<p class="img-center"><img src="' + 
      x.image + 
      '"/></p>' +
      "<p>Brand: " + 
      x.boardBrand + 
      "</p>" +
      "<p>Board Size: " + 
      x.boardSize + 
      "in</p>" +
      "<p>Wheel Size: " + 
      x.wheelSize + 
      "cm</p>" +
      "<p>Wheel Color: " + 
      x.wheelColor + 
      "</p>" +
      '<p class="itemPrice">Price: $' + 
      x.price + 
      "</p>" +
      '<p><button type="button" class="removeItem btn btn-success" style="margin-top: -5em; margin-left: 14em;">Remove<i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  );
  alert("Added your skateboard to the cart!");
  var itemtype = x.type;
  showSkateboards(itemtype);
}

// Backpack stufffff ------------------------------------
function backpacks(x) {
  return [
    '<div class="col-lg-3 col-sm-6 item-div">',
    '<div class="panel panel-default"><div class="panel-body">',
    '<p class="img-center"><img src="' + x.image + '"/></p>',
    "<p>Brand: " + x.bagName + "</p>",
    "<p>Bag Size: " + x.bagSize + "</p>",
    "<p>Waterproof?: " + x.waterproof + "</p>",
    "<p>Price:  $" + x.price + "</p>",
    '<p class="img-center"><button onclick=\'addBackpacksToCart(' +
      JSON.stringify(x) +
      ')\' type="button" class="btn btn-success backpack-add-btn">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  ].join("");
}

function showBackpacks(itemtype) {
  $("#" + itemtype).removeClass("hide");
  $(".all-items").show();
  $(".products").hide();
  $("#cart").addClass("hide").removeClass("show");

  var html =
    '<h1 id="clothing-title">' +
    capitalizeFirstLetter(itemtype) +
    "</h1><br>" +
    PRODUCTS[itemtype]
      .map(function (x) {
        return backpacks(x);
      })
      .join("");
  $("#" + itemtype)
    .html(html)
    .show();
}

function addBackpacksToCart(x) {
  TOTAL_SALE += x.price;
  var html =
    '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + "</p>";
  html += TOTAL_SALE + $(".navbar-cart").html(html);
  $("#cart").prepend(
    '<div class="col-lg-3 col-sm-6">' +
      '<div class="panel panel-default"><div class="panel-body">' +
      '<p class="img-center"><img src="' + 
      x.image + 
      '"/></p>' +
      "<p>Backpack Name: " + 
      x.bagName + 
      "</p>" +
      "<p>Backpack Size: " + 
      x.bagSize + 
      "</p>" +
      "<p>Waterproof?: " + 
      x.waterproof + 
      "</p>" +
      '<p class="itemPrice">Price: $' + 
      x.price + 
      "</p>" +
      '<p><button type="button" class="removeItem btn btn-success backpack-add-btn">Remove<i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  );
  alert("Added your backpack to the cart!");
  var itemtype = x.type;
  showBackpacks(itemtype);
}

// Shoes stufffff ------------------------------------
function shoes(x) {
  return [
    '<div class="col-lg-3 col-sm-6 item-div">',
    '<div class="panel panel-default"><div class="panel-body">',
    '<p class="img-center"><img src="' + x.image + '"/></p>',
    "<p>Shoes Name: " + x.shoeName + "</p>",
    "<p>Shoes Type: " + x.shoeType + "</p>",
    "<p>Shoes Size: " + x.shoeSize + "in</p>",
    "<p>Price:  $" + x.price + "</p>",
    '<p class="img-center"><button onclick=\'addShoesToCart(' +
      JSON.stringify(x) +
      ')\' type="button" class="btn btn-success shoe-add-btn">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  ].join("");
}

function showShoes(itemtype) {
  $("#" + itemtype).removeClass("hide");
  $(".all-items").show();
  $(".products").hide();
  $("#cart").addClass("hide").removeClass("show");

  var html =
    '<h1 id="clothing-title">' +
    capitalizeFirstLetter(itemtype) +
    "</h1><br>" +
    PRODUCTS[itemtype]
      .map(function (x) {
        return shoes(x);
      })
      .join("");
  $("#" + itemtype)
    .html(html)
    .show();
}

function addShoesToCart(x) {
  TOTAL_SALE += x.price;
  var html =
    '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + "</p>";
  html += TOTAL_SALE + $(".navbar-cart").html(html);
  $("#cart").prepend(
    '<div class="col-lg-3 col-sm-6">' +
      '<div class="panel panel-default"><div class="panel-body">' +
      '<p class="img-center"><img src="' + 
      x.image + 
      '"/></p>' +
      "<p>Shoes Name: " + 
      x.shoeName + 
      "</p>" +
      "<p>Shoes Type: " + 
      x.shoeType + 
      "</p>" +
      "<p>Shoes Size: " + 
      x.shoeSize + 
      "</p>" +
      '<p class="itemPrice">Price: $' + 
      x.price + 
      "</p>" +
      '<p><button type="button" class="removeItem btn btn-success">Remove<i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  );
  alert("Added your shoes to the cart!");
  var itemtype = x.type;
  showShoes(itemtype);
}

// Shirts stufffff ------------------------------------
function shirts(x) {
  return [
    '<div class="col-lg-3 col-sm-6 item-div">',
    '<div class="panel panel-default"><div class="panel-body">',
    '<p class="img-center"><img src="' + x.image + '"/></p>',
    "<p>Shirt: " + x.shirtName + "</p>",
    "<p>Shirt Sizes: " + x.shirtSize + "</p>",
    "<p>Price: $" + x.price + "</p>",
    '<p class="img-center"><button onclick=\'addShirtsToCart(' +
      JSON.stringify(x) +
      ')\' type="button" class="btn btn-success shirt-add-btn">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  ].join("");
}

function showShirts(itemtype) {
  $("#" + itemtype).removeClass("hide");
  $(".all-items").show();
  $(".products").hide();
  $("#cart").addClass("hide").removeClass("show");

  var html =
    '<h1 id="clothing-title">' +
    capitalizeFirstLetter(itemtype) +
    "</h1><br>" +
    PRODUCTS[itemtype]
      .map(function (x) {
        return shirts(x);
      })
      .join("");
  $("#" + itemtype)
    .html(html)
    .show();
}

function addShirtsToCart(x) {
  TOTAL_SALE += x.price;
  var html =
    '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + "</p>";
  html += TOTAL_SALE + $(".navbar-cart").html(html);
  $("#cart").prepend(
    '<div class="col-lg-3 col-sm-6">' +
      '<div class="panel panel-default"><div class="panel-body">' +
      '<p class="img-center"><img src="' + 
      x.image + 
      '"/></p>' +
      "<p>Shirt Name: " + 
      x.shirtName + 
      "</p>" +
      "<p>Shirt Size: " + 
      x.shirtSize + 
      "</p>" +
      '<p class="itemPrice">Price: $' + 
      x.price + 
      "</p>" +
      '<p><button type="button" class="removeItem btn btn-success">Remove<i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  );
  alert("Added your shirt to the cart!");
  var itemtype = x.type;
  showShirts(itemtype);
}

// Pants stufffff ------------------------------------
function pants(x) {
  return [
    '<div class="col-lg-3 col-sm-6 item-div">',
    '<div class="panel panel-default"><div class="panel-body">',
    '<p class="img-center"><img src="' + x.image + '"/></p>',
    "<p>Pants: " + x.pantsName + "</p>",
    "<p>Pants Sizes: " + x.pantsSize + "</p>",
    "<p>Price: $" + x.price + "</p>",
    '<p class="img-center"><button onclick=\'addPantsToCart(' +
      JSON.stringify(x) +
      ')\' type="button" class="btn btn-success pants-add-btn">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  ].join("");
}

function showPants(itemtype) {
  $("#" + itemtype).removeClass("hide");
  $(".all-items").show();
  $(".products").hide();
  $("#cart").addClass("hide").removeClass("show");

  var html =
    '<h1 id="clothing-title">' +
    capitalizeFirstLetter(itemtype) +
    "</h1><br>" +
    PRODUCTS[itemtype]
      .map(function (x) {
        return pants(x);
      })
      .join("");
  $("#" + itemtype)
    .html(html)
    .show();
}

function addPantsToCart(x) {
  TOTAL_SALE += x.price;
  var html =
    '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + "</p>";
  html += TOTAL_SALE + $(".navbar-cart").html(html);
  $("#cart").prepend(
    '<div class="col-lg-3 col-sm-6">' +
      '<div class="panel panel-default"><div class="panel-body">' +
      '<p class="img-center"><img src="' + 
      x.image + 
      '"/></p>' +
      "<p>Pants Name: " + 
      x.pantsName + 
      "</p>" +
      "<p>Pants Size: " + 
      x.pantsSize + 
      "</p>" +
      '<p class="itemPrice">Price: $' + 
      x.price + 
      "</p>" +
      '<p><button type="button" class="removeItem btn btn-success">Remove<i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  );
  alert("Added your pants to the cart!");
  var itemtype = x.type;
  showPants(itemtype);
}

// Hoodies stufffff ------------------------------------
function hoodies(x) {
  return [
    '<div class="col-lg-3 col-sm-6 item-div">',
    '<div class="panel panel-default"><div class="panel-body">',
    '<p class="img-center"><img src="' + x.image + '"/></p>',
    "<p>Hoodie Name: " + x.hoodieName + "</p>",
    "<p>Hoodie Size: " + x.hoodieSize + "</p>",
    "<p>Price: $" + x.price + "</p>",
    '<p class="img-center"><button onclick=\'addHoodiesToCart(' +
      JSON.stringify(x) +
      ')\' type="button" class="btn btn-success hoodie-add-btn">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  ].join("");
}

function showHoodies(itemtype) {
  $("#" + itemtype).removeClass("hide");
  $(".all-items").show();
  $(".products").hide();
  $("#cart").addClass("hide").removeClass("show");

  var html =
    '<h1 id="clothing-title">' +
    capitalizeFirstLetter(itemtype) +
    "</h1><br>" +
    PRODUCTS[itemtype]
      .map(function (x) {
        return hoodies(x);
      })
      .join("");
  $("#" + itemtype)
    .html(html)
    .show();
}

function addHoodiesToCart(x) {
  TOTAL_SALE += x.price;
  var html =
    '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + "</p>";
  html += TOTAL_SALE + $(".navbar-cart").html(html);
  $("#cart").prepend(
    '<div class="col-lg-3 col-sm-6">' +
      '<div class="panel panel-default"><div class="panel-body">' +
      '<p class="img-center"><img src="' + 
      x.image + 
      '"/></p>' +
      "<p>Hoodie Name: " + 
      x.hoodieName + 
      "</p>" +
      "<p>Hoodie Size: " + 
      x.hoodieSize + 
      "</p>" +
      '<p class="itemPrice">Price: $' + 
      x.price + 
      "</p>" +
      '<p><button type="button" class="removeItem btn btn-success">Remove<i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  );
  alert("Added your hoodie to the cart!");
  var itemtype = x.type;
  showHoodies(itemtype);
}

// Hat stufffff ------------------------------------
function hats(x) {
  return [
    '<div class="col-lg-3 col-sm-6 item-div">',
    '<div class="panel panel-default"><div class="panel-body">',
    '<p class="img-center"><img src="' + x.image + '"/></p>',
    "<p>Hat: " + x.hatName + "</p>",
    '<p>Price: $' + x.price + "</p>",
    '<p class="img-center"><button onclick=\'addHatsToCart(' +
      JSON.stringify(x) +
      ')\' type="button" class="btn btn-success hat-add-btn">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  ].join("");
}

function showHats(itemtype) {
  $("#" + itemtype).removeClass("hide");
  $(".all-items").show();
  $(".products").hide();
  $("#cart").addClass("hide").removeClass("show");

  var html =
    '<h1 id="clothing-title">' +
    capitalizeFirstLetter(itemtype) +
    "</h1><br>" +
    PRODUCTS[itemtype]
      .map(function (x) {
        return hats(x);
      })
      .join("");
  $("#" + itemtype)
    .html(html)
    .show();
}

function addHatsToCart(x) {
  TOTAL_SALE += x.price;
  var html =
    '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + "</p>";
  html += TOTAL_SALE + $(".navbar-cart").html(html);
  $("#cart").prepend(
    '<div class="col-lg-3 col-sm-6">' +
      '<div class="panel panel-default"><div class="panel-body">' +
      '<p class="img-center"><img src="' +
      x.image +
      '"/></p>' +
      "<p>Hat Name: " +
      x.hatName +
      "</p>" +
      '<p class="itemPrice">Price: $' +
      x.price +
      "</p>" +
      '<p><button type="button" class="removeItem btn btn-success">Remove<i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>',
  );
  alert("Added your hat to the cart!");
  var itemtype = x.type;
  showHats(itemtype);
}
// ----------------------------------------------------
function showHome() {
  $(".products").show();
  $(".all-items").hide();
}

function showCart() {
  $(".all-items").hide();
  $("#cart").removeClass("hide").show();
  let buttons = document.querySelectorAll(".removeItem");
  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", removeItem);
  };
}

function removeItem(e){
  var buttonClicked = e.target;
  var whole = buttonClicked.parentElement.parentElement.parentElement.parentElement;
  buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
  var price = whole.querySelector(".itemPrice").innerHTML.substring(8);
  TOTAL_SALE -= Number(price);
  var total = document.querySelector(".navbar-cart");
  total.innerHTML = "Total: $" + TOTAL_SALE.toFixed(2);
  alert("Successfully removed from the cart!");
}
// ----------------------------------------------------

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
      let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
      }
  }
}

// -------------------------------------------------------

function myFunction1() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var PRODUCTS = {
    skateboards: [
        {
            type: "skateboards",
            boardBrand: "Anti-Hero",
            boardSize: 9.1,
            wheelSize: 63,
            wheelColor: "Red",
            price: 72.00,
            image: "images/skateboards/Anti1.jpeg",
        },
        {
            type: "skateboards",
            boardBrand: "Anti-Hero",
            boardSize: 8.5,
            wheelSize: 59,
            wheelColor: "Green",
            price: 63.00,
            image: "images/skateboards/Anti2.jpeg",
        },
        {
            type: "skateboards",
            boardBrand: "Darkroom",
            boardSize: 8.125,
            wheelSize: 52,
            wheelColor: "Black",
            price: 59.00,
            image: "images/skateboards/Darkroom1.jpeg",
        },
        {
            type: "skateboards",
            boardBrand: "Flip",
            boardSize: 8.75,
            wheelSize: 62,
            wheelColor: "Orange",
            price: 70.00,
            image: "images/skateboards/Flip1.jpeg",
        },
        {
            type: "skateboards",
            boardBrand: "Flip",
            boardSize: 9.25,
            wheelSize: 46,
            wheelColor: "Purple",
            price: 64.00,
            image: "images/skateboards/Flip2.jpeg",
        },
        {
            type: "skateboards",
            boardBrand: "Pizza",
            boardSize: 8.25,
            wheelSize: 58,
            wheelColor: "Yellow",
            price: 67.00,
            image: "images/skateboards/Pizza1.jpeg",
        },
        {
            type: "skateboards",
            boardBrand: "Real",
            boardSize: 9.5,
            wheelSize: 56,
            wheelColor: "Pink",
            price: 69.00,
            image: "images/skateboards/Real1.jpeg",
        },
        {
            type: "skateboards",
            boardBrand: "Real",
            boardSize: 8.38,
            wheelSize: 74,
            wheelColor: "White",
            price: 69.00,
            image: "images/skateboards/Real2.jpeg",
        },
    ],
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function oneItem(x) {
    return [
      '<div class="col-lg-3 col-sm-6 item-div">',
      '<div class="panel panel-default"><div class="panel-body">',
      '<p class="img-center"><img src="' + x.image + '"/></p>',
      "<p>Brand: " + x.boardBrand + "</p>",
      "<p>Board Size: " + x.boardSize + "in</p>",
      "<p>Wheel Size: " + x.wheelSize + "cm</p>",
      "<p>Wheel Size: " + x.wheelColor + "</p>",
      "<p>Wheel Size: " + x.price + "</p></div></div></div>"
    ].join("");
  }

function showItems(itemtype) {
    $("#" + itemtype).removeClass("hide");
    $(".buy-items").show();
    $(".for-sale").hide();
    $("#cart")
        .addClass("hide")
        .removeClass("show");
    $("#sell-item-form")
        .addClass("hide")
        .removeClass("show");

    var html =
        '<br><br><br><h1 id="clothing-title">' +
        capitalizeFirstLetter(itemtype) +
        "</h1><br>" +
        PRODUCTS[itemtype]
          .map(function(x) {
            return oneItem(x);
          })
          .join("");
      $("#" + itemtype)
        .html(html)
        .show();
    }
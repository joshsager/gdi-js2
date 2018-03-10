

var data = {"records":[
    { "band":"Weezer",
      "albums":[
      {
        "name": "Blue",
        "year": 1994,
        "cover":"https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png"
      },
      {
        "name": "Pinkerton",
        "year": 1996,
        "cover":"https://upload.wikimedia.org/wikipedia/en/c/ca/Pinkerton_cover.jpg"
      }
      ]
    },{
      "band":"Foo Fighters",
        "albums":[
        {
          "name": "The Colour and The Shape",
          "year": 1997,
          "cover":"https://upload.wikimedia.org/wikipedia/en/0/0d/FooFighters-TheColourAndTheShape.jpg"
        },
        {
          "name": "Concrete and Gold",
          "year": 2017,
          "cover":"https://upload.wikimedia.org/wikipedia/en/e/e5/Concrete_and_Gold_Foo_Fighters_album.jpg"
        }
        ]
      },{
        "band":"The Black Keys",
        "albums":[
        {
          "name": "The Big Come UP",
          "year": 2002,
          "cover":"https://upload.wikimedia.org/wikipedia/en/f/fb/The_Black_Keys_-_The_Big_Come_Up.jpg"
        },
        {
          "name": "Brothers",
          "year": 2010,
          "cover":"https://cdn.shopify.com/s/files/1/1352/8857/products/BROTHERS-3000-1-2000x2000_1024x1024.jpg?v=1492285514"
        }
        ]
    },{
      "band":"American Minor",
      "albums":[
      {
        "name": "American Minor",
        "year": 2005,
        "cover":"https://i.scdn.co/image/cd6f33b9186229f5a7203f222202d36dc9cd6e13"
      }
      ]
  }
]}

function loadApplication(){
  console.log("I have loaded");
  var template = document.getElementById("albumstpl").innerHTML;
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.to_html(template, data);
  document.getElementById("albums").innerHTML = rendered;
}
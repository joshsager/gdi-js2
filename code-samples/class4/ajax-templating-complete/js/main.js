


var httpRequest;
var weezer_btn = document.getElementById("weezer_btn");
weezer_btn.addEventListener('click', onButtonClick);
var foo_fighters_btn = document.getElementById("foo_fighters_btn");
foo_fighters_btn.addEventListener('click', onButtonClick);
var black_keys_btn = document.getElementById("black_keys_btn");
black_keys_btn.addEventListener('click', onButtonClick);


function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      console.log('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText)
        renderToScreen(response);
      } else {
        console.log('There was a problem with the request.');
      }
    }
  }

  function renderToScreen(data){
    console.log("I have loaded");
    var template = document.getElementById("albumstpl").innerHTML;
    Mustache.parse(template);   // optional, speeds up future uses
    var rendered = Mustache.to_html(template, data);
    document.getElementById("albums").innerHTML = rendered;
  }


  function onButtonClick(event){
    var path = "js/weezer.json";

    switch(this.id){
      case "weezer_btn":
      path = "js/weezer.json";
      break;

      case "foo_fighters_btn":
      path = "js/foo_fighters.json";
      break;

      case "black_keys_btn":
      path = "js/the_black_keys.json";
      break;

      default:
      path = "js/weezer.json";

    }

    makeRequest(path);
  }

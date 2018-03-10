  var httpRequest;
  var button = document.getElementById("button");
  button.addEventListener('click', onButtonClick);


  function makeRequest() {
      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        console.log('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', 'js/data.json');
      httpRequest.send();
    }

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
          var response = JSON.parse(httpRequest.responseText)
          renderToScreen(response);
        } else {
          console.log('There was a problem with the request.');
        }
      }
    }

    function renderToScreen(data){
      var container = document.getElementById('main').innerHTML = data;
    }

    function onButtonClick(event){
      makeRequest();
    }

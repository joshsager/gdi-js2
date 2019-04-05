var httpRequest;

function loadData(){
  httpRequest = new XMLHttpRequest();

  if(!httpRequest){
    console.log("Giving Up can not create request");
    return false;
  }
  httpRequest.onreadystatechange = ajaxResponse;
  var path = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=uHL3nl7AaTxcbHJT6xcaBiP54fURQWZ9QNEcOyGA&location=Denver+CO"
  httpRequest.open('GET', path);
  httpRequest.send();

}

function ajaxResponse(){
  if(httpRequest.readyState === XMLHttpRequest.DONE){
    if(httpRequest.status === 200){
      var response = JSON.parse(httpRequest.responseText)
      console.log(httpRequest.responseText);
      updateScreen(response);
    }
  }
}

function updateScreen(mydata){
  var template = document.getElementById('dataTemplate').innerHTML;
  Mustache.parse(template);
  console.log(httpRequest.responseText);
  var result = Mustache.to_html(template, mydata)
  document.getElementById('data').innerHTML = result;
}

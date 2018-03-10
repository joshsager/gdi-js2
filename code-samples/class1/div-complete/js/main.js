var answer = window.confirm("Do you like waffles?");
var box = document.getElementsByClassName('box')[0];

if(answer){
  box.style.backgroundColor = "green";
}else{
  box.style.backgroundColor = "red";
}

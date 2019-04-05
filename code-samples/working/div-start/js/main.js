var result = window.confirm("Do you like ice cream");
var box = document.getElementsByClassName('box')[0];

console.log(box);

if(result){
  box.style.backgroundColor = "green";
  console.log("Can you see this yes I can?");

}else{
  box.style.backgroundColor = "red";
  console.log("Can you see this no I can't?");

}

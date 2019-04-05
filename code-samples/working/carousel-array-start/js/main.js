var images = ['img_1.jpeg','img_2.jpeg','img_3.jpeg'];
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var slide = document.getElementsByClassName("slide")[0];
var slide_counter = 0;

next.addEventListener("click", onNextClick);
previous.addEventListener("click", onPreviousClick);

function onNextClick(event){
  event.preventDefault();
  slide_counter++;
  slide.style.backgroundImage = "url('img/" + images[slide_counter] + "')";

  console.log("Next Button was pressed");
}

function onPreviousClick(event){
  event.preventDefault();
  slide_counter--;
  console.log("Previous Button was pressed");
  slide.style.backgroundImage = "url('img/" + images[slide_counter] + "')";
}

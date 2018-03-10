var images = [
  'https://cdn.shopify.com/s/files/1/0899/5804/files/MesaEngLogo_New_grande.png?v=1483658958',
  'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/head/mark_v_fr.jpg',
  'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/head/mark_v_back.jpg',
  'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/1by12-Combo/mark-five-1x12-combo-front_highres.jpg',
  'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/1by12-Combo/mark-five-1x12-combo-back_highres.jpg'
]

var data = {
  'slides':[
    {
      'image':'https://cdn.shopify.com/s/files/1/0899/5804/files/MesaEngLogo_New_grande.png?v=1483658958',
      'tag':'Best Amps ever!',
      'url':'http://www.mesaboogie.com/'
    },
    {
      'image':'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/head/mark_v_fr.jpg',
      'tag':'Front of the MarK V',
      'url':'http://www.mesaboogie.com/'
    },
    {
      'image':'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/head/mark_v_back.jpg',
      'tag':'Back of the Mark V',
      'url':'http://www.mesaboogie.com/'
    },
    {
      'image':'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/1by12-Combo/mark-five-1x12-combo-front_highres.jpg',
      'tag':'Combo for the win!',
      'url':'http://www.mesaboogie.com/'
    },
    {
      'image':'http://www.mesaboogie.com/media/Amplifiers/Electric/Mark%20Series/Mark%20V/1by12-Combo/mark-five-1x12-combo-back_highres.jpg',
      'tag':'Back of the Combo!',
      'url':'http://www.mesaboogie.com/'
    },
  ]
}

var link = document.getElementById('link');
var headline = document.getElementById('headline');
var slide = document.getElementsByClassName('slide')[0];
var next_btn = document.getElementById('next');
var previous_btn = document.getElementById('previous');
var current_slide = 0;

window.addEventListener('load', init);
next_btn.addEventListener('click', on_next_click);
previous_btn.addEventListener('click', on_previous_click);

function init(event){
  console.log('I have lodead');
  current_slide = Math.floor(Math.random()*data.slides.length);
  update_slide(current_slide);
}

function on_next_click(event){
  event.preventDefault();
  if(current_slide<data.slides.length-1){
    current_slide++;
  }else{
    current_slide = 0;
  }
  update_slide(current_slide)
}

function on_previous_click(event){
  event.preventDefault();
  if(current_slide>0){
    current_slide--;
  }else{
    current_slide = data.slides.length-1;
  }
  update_slide(current_slide)
}

function update_slide(slide_number){
  headline.innerHTML = data.slides[slide_number].tag;
  link.href = data.slides[slide_number].url
  slide.style.backgroundImage = 'url('+data.slides[slide_number].image+')';
}

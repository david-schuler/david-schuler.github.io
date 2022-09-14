var ic = 0;
var added = 0;
var background_pos = 0

document.addEventListener('DOMContentLoaded', moveChangeImage, false);

function moveChangeImage(){
  if(added == 0){
    added = 1;
    document.addEventListener('keydown', (e) => {
      switch (event.key) {
        case "a":
        case "ArrowLeft":
          testA(-1);
          break;
        case "f":
        case "ArrowRight":
          testA(1);
          break;
        case "s":
        case "ArrowUp":
          background_pos -= 25;
          testA(0);
          break;
        case "d":
        case "ArrowDown":
          background_pos += 25;
          testA(0);
          break;
      }

    });
  }
}

function test(){
  testA(1);
}

function testA(add){
  if(add != 0){
    ic = ic + add;
    if(ic > 9){
      ic = 1;
    }
    if(ic < 0){
      ic = 9;
    }
    background_pos = 0;
  } 
  el = document.getElementsByClassName('bg-gold')[0];
  image_name = 'back_'+ ic +'.jpg';
  el.style.backgroundImage = "url('" + image_name + "')";
  el.style.backgroundPosition = "0px " + background_pos + "px";
}

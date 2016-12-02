// line 2 ensures that the Javascript is not run until the *.html DOM has been pre-loaded. VERY IMPORTANT
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var width = 600,
    height = 400,
    frames = 10,
             
    currentFrame = 0,
               
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    image = new Image()
    image.src = 'w2c-sprite.png';
        
    var draw = function(){
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
         
            if (currentFrame == frames) {
                currentFrame = 0;
            } else {
              currentFrame++;
            }
        };
         
    setInterval(draw, 225);

    }
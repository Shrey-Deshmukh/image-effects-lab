var originalimage = null;
var redhueimage = null;
var greenhueimage = null;
var bluehueimage = null;
var rgbhueimage = null;
var noiseimage = null;
var negativeimage = null;
var windowimage = null;
var grayimage = null;
var sepiaimage = null;
var blacknwhiteimage = null;
var imagecanvas;
var file;

function loadimage(){
  file = document.getElementById("imgfile");
  originalimage = new SimpleImage(file);
  redhueimage = new SimpleImage(file);
  greenhueimage = new SimpleImage(file);
  bluehueimage = new SimpleImage(file);
  rgbhueimage = new SimpleImage(file);
  noiseimage = new SimpleImage(file);
  negativeimage = new SimpleImage(file);
  windowimage = new SimpleImage(file);
  grayimage = new SimpleImage(file);
  sepiaimage = new SimpleImage(file);
  blacknwhiteimage = new SimpleImage(file);

  imagecanvas=document.getElementById("can");
  originalimage.drawTo(imagecanvas);
}

function imageisloaded(inputimage) {
  if (inputimage == null || !inputimage.complete()) {
    alert("Image not loaded");
    return false;
  }
  return true;
}

function makeredhue(){
  if(imageisloaded(redhueimage)){
    makered();
  }
}
function makered(){
  for (var pixel of redhueimage.values()){
  var avg = (pixel.getRed()+ pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(avg*2-255);
      pixel.setBlue(avg*2-255);
    }
  }
  redhueimage.drawTo(imagecanvas);
}

function makegreenhue(){
  if(imageisloaded(greenhueimage)){
    makegreen();
  }
}
function makegreen(){
  for (var pixel of greenhueimage.values()){
  var avg = (pixel.getRed()+ pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setGreen(2*avg);
      pixel.setRed(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setGreen(255);
      pixel.setRed(avg*2-255);
      pixel.setBlue(avg*2-255);
    }
  }
  greenhueimage.drawTo(imagecanvas);
}

function makebluehue(){
  if(imageisloaded(bluehueimage)){
    makeblue();
  }
}
function makeblue(){
  for (var pixel of bluehueimage.values()){
  var avg = (pixel.getRed()+ pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setBlue(2*avg);
      pixel.setGreen(0);
      pixel.setRed(0);
    }
    else{
      pixel.setBlue(255);
      pixel.setGreen(avg*2-255);
      pixel.setRed(avg*2-255);
    }
  }
  bluehueimage.drawTo(imagecanvas);
}

function makergbhue(){
  if(imageisloaded(rgbhueimage)){
    makergb();
  }
}
function makergb(){
  var w = rgbhueimage.getWidth()/3;
  for(var pixel of rgbhueimage.values()){
    var avg = (pixel.getRed()+ pixel.getGreen()+pixel.getBlue())/3;
    if(pixel.getX() <= w){
      if (avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(avg*2-255);
      pixel.setBlue(avg*2-255);
    }}
      if(pixel.getX() > w & pixel.getX() <= 2*w){
        if (avg < 128){
      pixel.setGreen(2*avg);
      pixel.setRed(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setGreen(255);
      pixel.setRed(avg*2-255);
      pixel.setBlue(avg*2-255);
    }}
        if(pixel.getX() > 2*w & pixel.getX()<=3*w){
          if (avg < 128){
      pixel.setBlue(2*avg);
      pixel.setGreen(0);
      pixel.setRed(0);
    }
    else{
      pixel.setBlue(255);
      pixel.setGreen(avg*2-255);
      pixel.setRed(avg*2-255);
    }
        }

      }
  rgbhueimage.drawTo(imagecanvas);
    }

function makenoiseimg(){
  if(imageisloaded(noiseimage)){
    makenoise();
  }
}

function makenoise(){
  for(var pixel of noiseimage.values()){
    var rand =  (0.5 - Math.random())*125;
    pixel.setRed(pixel.getRed()+rand);
    pixel.setGreen(pixel.getGreen()+rand);
    pixel.setBlue(pixel.getBlue()+rand);
  }
  noiseimage.drawTo(imagecanvas);
}

function makenegativeimg(){
  if(imageisloaded(negativeimage)){
    makenegative();
  }
}

function makenegative(){
  for(var pixel of negativeimage.values()){
    pixel.setRed(255-pixel.getRed());
    pixel.setGreen(255-pixel.getGreen());
    pixel.setBlue(255-pixel.getBlue());
  }
  negativeimage.drawTo(imagecanvas);
}

function makeblack(pixel){
  pixel.setRed(0);
  pixel.setGreen(0);
  pixel.setBlue(0);
  return pixel;
}
function makewindowimg(){
  if(imageisloaded(windowimage)){
    makewindow();
  }
}
function makewindow(){
  for(var pixel of windowimage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if(x < 10){
      makeblack(pixel);}
    if(y < 10){
      makeblack(pixel);}
    if(x > windowimage.getWidth() - 10){
      makeblack(pixel);}
    if(y > windowimage.getHeight() - 10){
      makeblack(pixel);}
    if(x > (windowimage.getWidth() - 10)/2 & x < (windowimage.getWidth() + 10)/2){
      makeblack(pixel);}
    if(y > (windowimage.getHeight() - 10)/2 & y < (windowimage.getHeight() + 10)/2){
      makeblack(pixel);}
  }
  windowimage.drawTo(imagecanvas);
}

function makegrayimg(){
  if(imageisloaded(grayimage)){
     makegray();
     }
}
function makegray(){
  for(var pixel of grayimage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
    grayimage.drawTo(imagecanvas);
}

function makesepiaimg(){
  if(imageisloaded(sepiaimage)){
    makesepia();
  }
}
function makesepia(){
  for(var pixel of sepiaimage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg+100);
    pixel.setGreen(avg+60);
    pixel.setBlue(avg);
  }
  sepiaimage.drawTo(imagecanvas);
}

function makeblacknwhiteimg(){
  if(imageisloaded(blacknwhiteimage)){
    makeblacknwhite();
  }
}
function makeblacknwhite(){
  for(var pixel of blacknwhiteimage.values()){
    var avg =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg >= 120){
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(255);
  }
    else {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
  }
  blacknwhiteimage.drawTo(imagecanvas);
}

function resetimage(){
  if(imageisloaded(originalimage)){
   var context = imagecanvas.getContext("2d");
   context.clearRect(0, 0, imagecanvas.width,       imagecanvas.height);
   originalimage.drawTo(imagecanvas);
   originalimage = new SimpleImage(file);
   redhueimage = new SimpleImage(file);
   greenhueimage = new SimpleImage(file);
   bluehueimage = new SimpleImage(file);
   rgbhueimage = new SimpleImage(file);
   noiseimage = new SimpleImage(file);
   negativeimage = new SimpleImage(file);
   windowimage = new SimpleImage(file);
   grayimage = new SimpleImage(file);
   sepiaimage = new SimpleImage(file);
   blacknwhiteimage = new SimpleImage(file);
  }
  else
    alert("Reset not working");
}

$("#canvas").attr("src", $("#canvas").get(0).toDataURL("img/png"));

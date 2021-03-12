var hr, mn, sc;
var hrAngle, mnAngle, scAngle;


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,0,0);  

  translate(200,200);
  rotate(-90);
  
  angleMode(DEGREES);
  strokeWeight(7);
  noFill();

  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  line(0,0,100,0);
  pop();

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  
  mn = minute();
  mnAngle = map(mn, 0, 60, 0, 360);

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  line(0,0,75,0);
  pop();

  stroke(0,255,0);
  arc(0,0,275,275,0,mnAngle);

  hr = hour();
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  line(0,0,50,0);
  pop();

  stroke(0,0,255);
  arc(0,0,250,250,0,hrAngle);

  drawSprites();
  
}



















/*
async function getTime() {

  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  var responseJSON = await response.json();

  //console.log(responseJSON);

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  var min = datatime.slice(14,16);
  var sec = datahour.slice(17,19);

  //console.log(hour);
}
*/

// variables
var button, greeting;
var backgroundimg;
function preload(){
  backgroundimg = loadImage("1.jpg");
}
function setup(){
   canvas = createCanvas(1200,890);

   //Q1
   button = createButton("YES");
   button.position(600,150)
   button.mouseClicked(vote1);
   button = createButton("NO");
   button.position(600,170);
   button.mouseClicked(vote1);
   greeting = createElement("h2");
   greeting.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
   greeting.position(510,100);
   
   //Q2
   button = createButton("YES");
   button.position(600,250)
   button.mouseClicked(vote2);
   button = createButton("NO");
   button.position(600,270);
   button.mouseClicked(vote2);
   greeting = createElement("h2");
   greeting.html("Q2. Would you be willing to contribute a small amount every month for such a program?")
   greeting.position(510,190);
   
   //Q3
   button = createButton("100");
   button.position(600,360);
   button.mouseClicked(vote3);
   button = createButton("500");
   button.position(600,380);
   button.mouseClicked(vote3);
   button = createButton("1000");
   button.position(600,400);
   button.mouseClicked(vote3);
   button = createButton("5000");
   button.position(600,420);
   button.mouseClicked(vote3);
   button = createButton("MORE");
   button.position(600,440);
   button.mouseClicked(vote4);
   greeting = createElement("h2");
   greeting.html("Q3. How much per month would you be willing to pay?");
   greeting.position(510,300);

   //Information
   input = createInput("NAME PLEASE");
   input.position(300,400);
   input = createInput("AGE");
   input.position(300,430);
   input = createInput("GENDER");
   input.position(300,460);
   input = createInput("STATE");
   input.position(300,490);
   input = createInput("CITY");
   input.position(300,520);

   //Greeting
   greeting = createElement("h3");
   greeting.html("PLEASE FILL THIS");
   greeting.position(270,340);

   //Q4
   button = createButton("YES");
   button.position(600,500);
   button.mouseClicked(vote6);
   button = createButton("NO");
   button.position(600,520);
   button.mouseClicked(vote7)
   greeting = createElement("h2");
   greeting.html("Q4. Would you like to pay some money in orphanage school or in charity. If you say NO so give me reason please ");
   greeting.position(510,450)

}
function draw(){
  background(backgroundimg);
}
function vote1(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(800,150);
}
function vote2(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(800,250);
}
function vote3(){
  greeting = createElement("h2");
  greeting.html("It's an great amount");
  greeting.position(700,360);
}
function vote4(){
  input = createInput("!AMOUNT!");
  input.position(700,430);
  button = createButton("SUBMIT");
  button.position(900,430);
  button.mouseClicked(vote5);
}
function vote5(){
  greeting = createElement("h2");
  greeting.html("It's an great amount");
  greeting.position(700,360);
}
function vote6(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(800,500); 
}
function vote7(){
  input = createInput("!REASON!");
  input.position(700,520);
  button = createButton("SUBMIT");
  button.position(900,520);
  button.mouseClicked(vote8);
}
function vote8(){
  greeting = createElement("h2");
  greeting.html("OK :(");
  greeting.position(1000,520)
}
/* Declare variables below to save the different sections (divs) of your story*/
let firstbutton=document.querySelector(".option-one");
let secondbutton=document.querySelector(".option-two");
let optiononescreen=document.querySelector(".option-one-screen");
let optiontwoscreen=document.querySelector(".option-two-screen");
let optiononeend=document.querySelector(".option-one-end");
let optiontwoend=document.querySelector(".option-two-end");
let storyopening=document.querySelector(".story-opening");
let blue=document.querySelector(".blueberries");
let straw=document.querySelector(".strawberries");



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
firstbutton.onclick=function(){
    optiononescreen.style.display="block";
    storyopening.style.display="none";
    firstbutton.style.display="none";
    secondbutton.style.display="none";
}; 
secondbutton.onclick=function(){
    optiontwoscreen.style.display="block";
    storyopening.style.display="none";
    firstbutton.style.display="none";
    secondbutton.style.display="none";
};
blue.onmouseover=function(){
optiononeend.style.display="block";                  
 optiononescreen.style.display="none";
};
straw.onmouseover=function(){
optiontwoend.style.display="block";                  
 optiontwoscreen.style.display="none";
};
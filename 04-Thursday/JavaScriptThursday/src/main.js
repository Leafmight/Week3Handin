function clickMe(){ 
  var style= document.getElementById("div1").style;

style.color = "red";
style.width = "100px";
style.backgroundColor = "yellow";

var style= document.getElementById("div2").style;

style.color = "green";
style.width = "50px";
style.backgroundColor = "red";

var style= document.getElementById("div3").style;

style.color = "blue";
style.width = "100px";
style.backgroundColor = "yellow";
};
    
var button = document.getElementById("changeColour");
button.onclick = clickMe;

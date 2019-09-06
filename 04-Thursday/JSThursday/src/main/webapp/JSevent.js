

function clickMe1(e){
    var target = e.target;
//    document.getElementById("gg").innerHTML = "Hi from idOfTheDiv1";
document.getElementById("html").innerText = "Hi from " + target.id;
    
}; 
var button1 = document.getElementById("GGbutton");
button1.onclick = clickMe1;

function clickMe2(e){
      var target =  e.target ;
//    document.getElementById("bg").innerHTML = "Hi from idOfTheDiv2";
document.getElementById("html").innerText = "Hi from " + target.id;
    
}; 
var button2 = document.getElementById("BGbutton");
button2.onclick = clickMe2;


function clickMe(e) {
    var me = this;
    var target =  e.target ;
   // alert("Pressed " + target.id);
   // alert(me.id);
    document.getElementById("html").innerText = "Pressed: " + target.id;
   console.log("For Console")
}

var button5 = document.getElementById("outer");
button5.addEventListener("click",clickMe, false);


var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);

var tags = "<ul><li>" + all.map(function (name) {

    return name;
    }).join("</li><li>") + "</li></ul>" ;

document.getElementById("l").innerHTML = tags;


function add(name){
   name = document.getElementById("addName").value;
  all.push(name);
  var tag = "<ul><li>" + all.map(function (names) {
    return names;
    }).join("</li><li>") + "</li></ul>" ;

document.getElementById("l").innerHTML = tag;
};

var button6 = document.getElementById("addButton");
button6.onclick = add;

function removeFirst(){
  all.shift();
  var tag = "<ul><li>" + all.map(function (names) {
    return names;
    }).join("</li><li>") + "</li></ul>" ;

document.getElementById("l").innerHTML = tag;
};

var button6 = document.getElementById("rfButton");
button6.onclick = removeFirst;

function removeLast(){
  all.pop();
  var tag = "<ul><li>" + all.map(function (names) {
    return names;
    }).join("</li><li>") + "</li></ul>" ;

document.getElementById("l").innerHTML = tag;
};

var button6 = document.getElementById("rlButton");
button6.onclick = removeLast;


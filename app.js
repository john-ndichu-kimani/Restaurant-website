let menubutton = document.getElementById("menubutton");
let navlinks = document.getElementById("navlinks");
let menu = document.getElementById("menu");
let button=document.getElementById("button");
button.onclick=function(){
alert("Welcome to my bakery website!!")
}
navlinks.style.right="-300px";
menubutton.onclick=function(){
  if(navlinks.style.right=="-300px"){
    navlinks.style.right="0";
    menu.src="cross2.png";
  }
  else{
    navlinks.style.right="-300px";
    menu.src="menu.png";
  }
}

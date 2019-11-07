var link=document.querySelector(".js-lesson");
var popup=document.querySelector(".modal-write-us");
var close=document.querySelector(".modal-content-close-lesson");
var login=document.querySelector("[name=name]");
var email=document.querySelector("[name=mail]");
var overlay=document.querySelector(".overlay");
var form=popup.querySelector("form");
var isStorageSupport=true;
var storage="";

 try{
 storage=localStorage.getItem("login");
 }
 catch(err){
  isStorageSupport=false;
 }

link.addEventListener("click",function(evt)
{
 evt.preventDefault();
 popup.classList.add("modal-show-write");
 overlay.classList.add("overlay-show");
 if(storage){
 	login.value=storage;
 	email.focus();
 }
 else{
 	login.focus();
 }
});

close.addEventListener("click",function(evt)
{
 evt.preventDefault();
 popup.classList.remove("modal-show-write");
 popup.classList.remove("modal-error");
 overlay.classList.remove("overlay-show");
});

form.addEventListener("submit",function(evt)
{
 if(!login.value || !email.value){
 evt.preventDefault();
 popup.classList.add("modal-error");
 }
 else{
 	if(isStorageSupport){
 localStorage.setItem("login",login.value);
 }
 }
});

window.addEventListener("keydown",function(evt){
 if(evt.keyCode===27){
 if(popup.classList.contains("modal-show-write")){
 	evt.preventDefault();
 	popup.classList.remove("modal-show-write");
 	popup.classList.remove("modal-error");
 	overlay.classList.remove("overlay-show");
 }
}
});

overlay.addEventListener("click",function(evt){
	console.log("клик снаружи модала");
evt.preventDefault();
popup.classList.remove("modal-show-write");
popup.classList.remove("modal-error");
overlay.classList.remove("overlay-show");
});
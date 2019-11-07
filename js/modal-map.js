var maplink=document.querySelector(".js-map");
var mappopup=document.querySelector(".modal-map");
var mapclose=document.querySelector(".modal-content-close-map");
var mapoverlay=document.querySelector(".overlay");

maplink.addEventListener("click",function(evt)
{
 evt.preventDefault();
 mappopup.classList.add("modal-show-map");
 mapoverlay.classList.add("overlay-show");
 console.log("тыкнула на карту");
});

mapclose.addEventListener("click",function(evt)
{
 evt.preventDefault();
 mappopup.classList.remove("modal-show-map");
 mapoverlay.classList.remove("overlay-show");
});

window.addEventListener("keydown",function(evt){
 if(evt.keyCode===27){
 if(mappopup.classList.contains("modal-show-map")){
 	evt.preventDefault();
 	mappopup.classList.remove("modal-show-map");
 	mapoverlay.classList.remove("overlay-show");
 }
}
});

mapoverlay.addEventListener("click",function(evt){
	console.log("клик снаружи модала");
evt.preventDefault();
mappopup.classList.remove("modal-show-map");
mapoverlay.classList.remove("overlay-show");
});

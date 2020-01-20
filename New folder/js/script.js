var imagesLink = document.querySelectorAll('.images img');
var imagedest = document.querySelector('#imgs');
function getattr(){
    void(0);
}
for(var i =0 ; i<imagesLink.length;i++){
    imagesLink[i].addEventListener("click",function(){
        var sources = this.getAttribute("src");
        imagedest.setAttribute("style","background-image:url('" + sources  + "');");
    });
}

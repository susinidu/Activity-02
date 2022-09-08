var navigate
var navigate = document.getElementById("navigate");

navigate.addEventListener ("click",function(){
    window.open(navigate.value);
    console.log(navigate.value);

});
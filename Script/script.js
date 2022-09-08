var navigate
var navigate = document.getElementById("navigate");

navigate.addEventListener ("change",function(){
    window.open(navigate.value);
    console.log(navigate.value);

});
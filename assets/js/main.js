var cabecalho = document.getElementById('cabecalho')
cabecalho.style.display = "none";

var coruja = document.querySelector('#lechuza')
coruja.style.filter = "grayscale(100%)";


var inputs = document.querySelectorAll('input')
for (var i = 0; i < inputs.length; i++){
inputs[i].style.background = "red";
}

var icons = document.getElementsByClassName('icon')
icons[5].setAttribute('href','https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA')

var h2 = document.getElementsByTagName('h2')
for (var i = 0; i < h2.length; i++){
h2[i].style.color = "red";
}

var icones = document.getElementsByClassName('icon')
for (var i = 0; i < icones.length; i++){
icones[i].style.background = "yellow";
}
for (var i = 0; i < icones.length; i++){
icones[i].style.color = "red";
}

var fs = document.getElementsByClassName('icon')
var four = fs[6]
if (four.parentNode){
four.parentNode.removeChild(four)
}

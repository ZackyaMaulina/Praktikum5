// DOM Selection
// document.getElementsByTagName()

const h2 = document.getElementsByTagName('h2');
h2[0].style.color = 'rgb(16, 255, 88)';
h2[0].style.fontFamily = 'Helvetica';
h2[0].style.fontSize = '30px';


// document.getElementsByClassName()

const button = document.getElementsByClassName('button');
button[0].style.color = 'yellow';
button[1].style.color = 'yellow';
button[0].style.backgroundColor = 'black';
button[1].style.backgroundColor = 'black';

const p = document.querySelector(".writer").style
p.color ='red';

const nav = document.querySelectorAll(".isi")
for(let i=0; i<nav.length; i++){
    nav[i].style.display = "inline-block"
    nav[i].style.fontSize = "15px"
    nav[i].style.color = "#1B4125"
}

//Memanggil semua elemen isi
var x = document.querySelectorAll(".isi");

//mengatur backgroud color elemen isi pertama
x[0].style.backgroundColor = "#97D2F3";


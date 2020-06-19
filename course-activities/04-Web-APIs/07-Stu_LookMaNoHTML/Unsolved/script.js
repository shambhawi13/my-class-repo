// Create your HTML Page via DOM Methods here!

var h1 = document.createElement('h1');
document.body.appendChild(h1);
document.body.childNodes[2].textContent = "I am H1";
document.body.childNodes[2].setAttribute('style','text-align:center');

var h2 = document.createElement('h2');
document.body.appendChild(h2);

var img = document.createElement('img');
document.appendChild(img);


// La biblioteca p5 no se carga hasta que se llama a la función setup ()
// es por eso que no se pueden llamar funciones p5, como createCanvas o
// rect antes de la init.
// Para más información sobre por qué este es el caso
// revisa el p5 github. https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup
function setup(){
//  createCanvas(980, 640, WEBGL);
//  rect(10, 10, 1004, 748);
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
// Lo usaremos despues 
  background(255);
  translate(-width/2, -height/2, 0);
  box();
}

//Get all pyramids so you can add more pyramids in the HTML, just one by default
var pyramids = Array.from(document.querySelectorAll('.pyramid'));
var interval = 5000;

setTimeout(init, 100);

setInterval(pyramidize, interval);

function init() {
  pyramids.forEach(pyramid => {
    //90 for cubes, 120 for pyramid
    pyramid.style.setProperty('--fold', '-90deg');
    
    //Fade in and change from facing user to upright
    pyramid.style.setProperty('--opacity', 1);
    pyramid.style.setProperty('--rotateX', '90deg');
  }); 
}

function pyramidize() {
  pyramids.forEach(pyramid => {
    pyramid.style.setProperty('--fold', '-120deg');
    
    //Triangle shape only needs three coordinates, but we use four here (with the second and third being the same) to match the number of coordinates needed for the square. By having the same number of corrdinates the browser can use interpolation to animate between the square shape and the triangle shape.
    pyramid.style.setProperty('--clipped', 'var(--shape-triangle)');
    location.href = "about.html";
  });
}
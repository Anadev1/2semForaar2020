/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');

// the image names should be real image names
var myGallery = [
  "11.jpg",
  "22.jpg",
  "33.jpg",
  "44.jpg",
  "55.jpg",
  "66.jpg"
];

for (var i = 0; i < myGallery.length; i++) {
	// note the shorthand code below
    exhibition.innerHTML += '<img src="images/' + myGallery[i] + '" alt="from my gallery">';
}
// let the loop create the HTML for your gallery


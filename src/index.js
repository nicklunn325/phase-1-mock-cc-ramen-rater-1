// write your code here
// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// select #ramen-menu div
// fetch ramens data from /ramens endpoint
// iterate over ramens data, and for each ramen create an image
// create image tag
// update src attribute
// append to #ramen-menu div

const ramenMenu = document.querySelector("#ramen-menu");
const baseUrl = "http://localhost:3000";

fetch(baseUrl + "/ramens")
  .then((res) => res.json())
  .then((ramensData) => renderRamens(ramensData));

function renderRamens(ramens) {
  updateRamenDetails(ramens[0]);
  ramens.forEach(appendRamenImage);
}

function appendRamenImage(ramen) {
  const img = document.createElement("img");
  img.src = ramen.image;
  img.details = ramen;
  img.addEventListener("click", () => updateRamenDetails(ramen));
  ramenMenu.append(img);
}

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

// add event listener to each image in the #ramen-menu div
// have callback function for event listener that will update #ramen-detail div
// where does the ramen data come from?
// select name, restaurant, image, rating, and comment tags in #ramen-detail div
// update all tags with correct information

function updateRamenDetails(ramen) {
  //   let ramen = e.target.details;
  const name = document.querySelector(".name");
  name.innerText = ramen.name;
  const image = document.querySelector(".detail-image");
  image.src = ramen.image;
  const restaurant = document.querySelector(".restaurant");
  restaurant.innerText = ramen.restaurant;
  const rating = document.querySelector("#rating-display");
  rating.innerText = ramen.rating;
  const comment = document.querySelector("#comment-display");
  comment.innerText = ramen.comment;
}

// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

// add a submit event listener to the new ramen form
// select #ramen-menu div
// select the new ramen form
// callback function that will add the ramen to the ramen-menu div
// select all input fields from form
// create image and add to ramen-menu div

const ramenForm = document.querySelector("#new-ramen");
ramenForm.addEventListener("submit", createRamen);

function createRamen(event) {
  event.preventDefault();
  const name = document.querySelector("#new-name").value;
  const restaurant = document.querySelector("#new-restaurant").value;
  const image = document.querySelector("#new-image").value;
  const rating = document.querySelector("#new-rating").value;
  const comment = document.querySelector("#new-comment").value;
  //   console.log(name, restaurant, image, rating, comment);
  const ramen = { name, restaurant, image, rating, comment };
  console.log(ramen);
  appendRamenImage(ramen);
}

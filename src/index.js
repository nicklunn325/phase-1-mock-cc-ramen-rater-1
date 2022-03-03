// write your code here
//See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

const baseUrl = "http://localhost:3000";

fetch(baseUrl + "/ramens")
  .then((res) => res.json())
  .then((ramensData) => appendRamens(ramensData));

function appendRamens(ramens) {
  //   const ramenContainer = document.querySelector("#ramen-menu");

  ramens.forEach(renderRamenImage);
}

function renderRamenImage(ramen) {
  const ramenContainer = document.querySelector("#ramen-menu");
  const img = document.createElement("img");
  img.src = ramen.image;
  img.dataset.ramenId = ramen.id;
  img.addEventListener("click", fetchRamen);
  ramenContainer.appendChild(img);
}

function fetchRamen(event) {
  fetch(baseUrl + "/ramens/" + event.target.dataset.ramenId)
    .then((res) => res.json())
    .then((ramen) => renderRamen(ramen));
}

function renderRamen(ramen) {
  const image = document.querySelector(".detail-image");
  image.src = ramen.image;
  const name = document.querySelector(".name");
  name.innerText = ramen.name;
  const restaurant = document.querySelector(".restaurant");
  restaurant.innerText = ramen.restaurant;
  const rating = document.querySelector("#rating-display");
  rating.innerText = ramen.rating;
  const comment = document.querySelector("#comment-display");
  comment.innerText = ramen.comment;
}

//Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

//add event listener to each image in #ramen-menu div
//the callback function should update the #ramen-detail div with information about the ramen that was clicked
// where do we get the ramen details from??

//Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

//select form, add submit event listener

const form = document.querySelector("#new-ramen");

form.addEventListener("submit", addRamen);

function addRamen(event) {
  event.preventDefault();
  const name = document.querySelector("#new-name").value;
  const restaurant = document.querySelector("#new-restaurant").value;
  const image = document.querySelector("#new-image").value;
  const rating = document.querySelector("#new-rating").value;
  const comment = document.querySelector("#new-comment").value;

  const ramen = { name, restaurant, image, rating, comment };
  renderRamen(ramen);
  renderRamenImage(ramen);
}

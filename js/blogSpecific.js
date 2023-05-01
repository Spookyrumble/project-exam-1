const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://codewithspooks.com/insidethetrip/wp-json/wp/v2/posts/";

async function fetchSinglePost() {
  const response = await fetch(url + id);

  const data = await response.json();

  return data;
}

const container = document.querySelector(".blogDetailContainer");
const setTitle = document.querySelector(".blogPageTitle");

let loader = document.querySelector(".carouselContainer");

function displayPost(post) {
  loader.innerHTML = "";
  const title = post.title.rendered;
  const wpPost = post.content.rendered;
  setTitle.innerText = title;
  setTitle.style.fontSize = "2rem";
  setTitle.style.letterSpacing = "5px";
  setTitle.style.textTransform = "uppercase";

  const postContainer = document.createElement("div");
  postContainer.classList.add(".postContainer");
  postContainer.innerHTML = wpPost;

  container.append(postContainer);
}

async function mainFunction() {
  const post = await fetchSinglePost();
  console.log(post);

  displayPost(post);
}

mainFunction();

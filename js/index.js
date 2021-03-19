const toggleBtn = document.getElementById("toggleBtn");
const sideBar = document.getElementById("sideBar");
const content = document.querySelector(".content");
const title = document.querySelector(".title");
const roundImg = document.querySelector(".round-img");
const aboutMe = document.querySelector(".aboutme");

toggleBtn.addEventListener("click", show);
function show() {
  sideBar.classList.toggle("active");
  aboutMe.classList.toggle("textChange");
  content.classList.toggle("changeColor");
  title.classList.toggle("reduce");
  roundImg.classList.toggle("filter");
}

// SIDE BAR REMOVE ONCLICK

content.addEventListener("click", () => {
  sideBar.classList.remove("active");
  content.classList.remove("changeColor");
  title.classList.remove("reduce");
  roundImg.classList.remove("filter");
  aboutMe.classList.remove("textChange");
});

// animation effect
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};
const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.1) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
  console.log("handeIntersect");
};
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal-down").forEach((r) => {
  observer.observe(r);
});
document.querySelectorAll(".reveal-up").forEach((r) => {
  observer.observe(r);
});

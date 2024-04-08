function showInfo(infoId) {
  const infoContents = document.querySelectorAll(".info-content");
  infoContents.forEach((content) => {
    content.classList.add("hidden");
  });

  const markers = document.querySelectorAll(".book-marker");
  markers.forEach((marker) => {
    marker.classList.remove("selected");
  });

  const selectedInfo = document.getElementById(infoId + "-info");
  selectedInfo.classList.remove("hidden");

  const selectedMarker = document.querySelector(
    `[onclick="showInfo('${infoId}')"]`
  );
  selectedMarker.classList.add("selected");
}

function showProjectDescription(projectId) {
  const projectDescriptions = document.querySelectorAll(".project-description");
  projectDescriptions.forEach((description) => {
    description.classList.add("hidden");
  });

  const selectedDescription = document.getElementById(
    projectId + "-description"
  );
  selectedDescription.classList.remove("hidden");

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.classList.remove("selected");
  });

  const selectedCard = document.querySelector(
    `[onclick="showProjectDescription('${projectId}')"]`
  );
  selectedCard.classList.add("selected");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const aboutMeButton = document.querySelector(".book-marker:first-child");

  aboutMeButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const referencesButton = document.querySelector(".book-marker:last-child");

  referencesButton.addEventListener("click", function () {
    const bottomContainer = document.querySelector(".bottom-container");
    bottomContainer.scrollIntoView({ behavior: "smooth" });
  });
});

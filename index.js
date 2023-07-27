const sectionsIds = ["about", "car", "house", "tourism", "contact"];

const sections = sectionsIds.reduce(
  (prev, selector) => ({
    ...prev,
    [selector]: document.getElementById(`${selector}-section`),
  }),
  {}
);
sectionsIds.forEach((selector) => {
  document.querySelector(`.${selector}`).addEventListener("click", () => {
    console.log("efsefsdf");
    sections[selector].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "center",
    });
  });
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-menu-open");
});

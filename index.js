const sectionsIds = ["about", "car", "house", "tourism", "contact"];

const sections = sectionsIds.reduce(
  (prev, selector) => ({
    ...prev,
    [selector]: document.getElementById(`${selector}-section`),
  }),
  {}
);
sectionsIds.forEach((selector) => {
  document.getElementById(selector).addEventListener("click", () => {
    sections[selector].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "center",
    });
  });
});

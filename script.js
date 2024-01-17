let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let sectionTop = window.scrollY;
    let sectionOffset = sec.offsetTop;
    let sectionHeight = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (
      sectionTop >= sectionOffset &&
      sectionTop < sectionOffset + sectionHeight
    ) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

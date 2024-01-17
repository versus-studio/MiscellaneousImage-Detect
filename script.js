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

function uploadLinks() {
    document.getElementById('uploadPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('uploadPopup').style.display = 'none';
}

function displayImage() {
    const input = document.getElementById('imageInput');
    const image = document.getElementById('selectedImage');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}


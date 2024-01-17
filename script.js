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


// Upload images
function uploadLinks() {
    document.getElementById('uploadPopup').style.display = 'block';
}

function closePopup() {
    const uploadPopup = document.getElementById('uploadPopup');
    const imageInput = document.getElementById('imageInput');
    const selectedImage = document.getElementById('selectedImage');

    uploadPopup.style.display = 'none';

    // Reset the value of the file input after a short delay
    setTimeout(function () {
        imageInput.value = '';
    }, 100);

    // Clear the image source and hide the image immediately
    selectedImage.src = '';
    selectedImage.style.display = 'none';
}

function displayImage() {
    const input = document.getElementById('imageInput');
    const image = document.getElementById('selectedImage');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            image.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        image.src = '';
        image.style.display = 'none';
    }
}s
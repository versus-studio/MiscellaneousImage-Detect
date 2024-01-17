// Add these functions at the end of your existing script.js

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

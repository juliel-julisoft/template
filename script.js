const bannerImages = document.querySelectorAll('.banner-img');
let currentImageIndex = 0;

function changeBannerImage() {
    bannerImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    bannerImages[currentImageIndex].classList.add('active');
}

setInterval(changeBannerImage, 3000);
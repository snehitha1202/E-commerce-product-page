let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-container img');
const totalImages = galleryImages.length;

document.querySelector('.prev').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : totalImages - 1;
  updateGallery();
});

document.querySelector('.next').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex < totalImages - 1) ? currentImageIndex + 1 : 0;
  updateGallery();
});

function updateGallery() {
  const galleryContainer = document.querySelector('.gallery-container');
  galleryContainer.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}
let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.reviews-container .review');
const totalReviews = reviews.length;

document.querySelector('.review-prev').addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex > 0) ? currentReviewIndex - 1 : totalReviews - 1;
  updateReviews();
});

document.querySelector('.review-next').addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex < totalReviews - 1) ? currentReviewIndex + 1 : 0;
  updateReviews();
});

function updateReviews() {
  const reviewsContainer = document.querySelector('.reviews-container');
  reviewsContainer.style.transform = `translateX(-${currentReviewIndex * 100}%)`;
}


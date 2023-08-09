const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imageSrc = thumbnail.querySelector('img').src;
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImage.src = ''; // Clear the image source
});

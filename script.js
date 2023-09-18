document.addEventListener('DOMContentLoaded', function() {
    const mainImages = document.querySelectorAll('.main-image');
    const galleryImages = document.querySelectorAll('.gallery-image');
  
    mainImages.forEach((mainImage, index) => {
      mainImage.addEventListener('click', function() {
        openGallery(index);
      });
    });
  
    function openGallery(index) {
      const galleryContainer = document.createElement('div');
      galleryContainer.classList.add('gallery-container');
      document.body.appendChild(galleryContainer);
  
      const galleryOverlay = document.createElement('div');
      galleryOverlay.classList.add('gallery-overlay');
      galleryContainer.appendChild(galleryOverlay);
  
      const galleryInner = document.createElement('div');
      galleryInner.classList.add('gallery-inner');
      galleryContainer.appendChild(galleryInner);
  
      galleryImages.forEach((galleryImage, i) => {
        const clonedImage = galleryImage.cloneNode();
        clonedImage.classList.add('cloned-image');
        if (i === index) {
          clonedImage.classList.add('active');
        }
        galleryInner.appendChild(clonedImage);
  
        clonedImage.addEventListener('click', function() {
          galleryContainer.remove();
        });
      });
  
      galleryContainer.addEventListener('click', function(event) {
        if (event.target === galleryOverlay) {
          galleryContainer.remove();
        }
      });
    }
  });
  
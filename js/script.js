// Get campera - when user clicks on it, pop up a picrure
var slideIndex = 1;

function nextSlide(
  currentSlideShow,
  currentPhotoPosition,
  currentMySlides,
  closeButton,
  nextSlide,
  prevSlide
) {
  showSlides(
    (slideIndex += 1),
    currentSlideShow,
    currentPhotoPosition,
    currentMySlides,
    closeButton,
    nextSlide,
    prevSlide
  );
}

function prevSlide(
  currentSlideShow,
  currentPhotoPosition,
  currentMySlides,
  closeButton,
  nextSlide,
  prevSlide
) {
  showSlides(
    (slideIndex -= 1),
    currentSlideShow,
    currentPhotoPosition,
    currentMySlides,
    closeButton,
    nextSlide,
    prevSlide
  );
}

function hideSlides(
  currentSlideShow,
  currentPhotoPosition,
  currentMySlides,
  closeButton,
  nextSlide,
  prevSlide) {
    var i;
    document.getElementById(prevSlide).style.display = "none";
    document.getElementById(nextSlide).style.display = "none";
    document.getElementById(closeButton).style.display = "none";
    document.getElementById(currentSlideShow).classList.remove(currentPhotoPosition);
    var slides = document.getElementsByClassName(currentMySlides);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
}

// When the user clicks the camera, open the carousel
function showSlides(
  nextIndex,
  currentSlideShow,
  currentPhotoPosition,
  currentMySlides,
  closeButton,
  nextSlide,
  prevSlide
) {
  document.getElementById(prevSlide).style.display = "block";
  document.getElementById(nextSlide).style.display = "block";
  document.getElementById(closeButton).style.display = "block";

  // Set where the photo slide show should display
  document.getElementById(currentSlideShow).classList.add(currentPhotoPosition);

  var i;
  var slides = document.getElementsByClassName(currentMySlides);

  if (nextIndex > slides.length) {
    slideIndex = 1;
  }
  if (nextIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

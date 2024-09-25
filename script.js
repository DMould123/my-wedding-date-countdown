// Select the elements representing the countdown units
const getDays = document.getElementById('wedding-days')
const getHours = document.getElementById('wedding-hours')
const getMinutes = document.getElementById('wedding-minutes')
const getSeconds = document.getElementById('wedding-seconds')

// Get the wedding date and time in milliseconds
const weddingDate = new Date('Sept 14, 2024, 14:55:00').getTime()

// Call the function to start updating the countdown
updateWeddingCountdown()

// Implement function to update the wedding countdown
function updateWeddingCountdown() {
  const current = new Date().getTime()
  const remainingTime = weddingDate - current

  if (remainingTime < 0) {
    // The wedding has already happened
    document.querySelector('.wedding-countdown').innerHTML = `
      <h3 class="congrats-message">Mollie & David are happily married! 🎉💍❤️</h3>
    `
    // Optionally stop further updates by returning early
    return
  }

  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24

  const remainingDays = Math.floor(remainingTime / days)
  const remainingHours = Math.floor((remainingTime % days) / hours)
  const remainingMinutes = Math.floor((remainingTime % hours) / minutes)
  const remainingSeconds = Math.floor((remainingTime % minutes) / seconds)

  getDays.innerText = remainingDays
  getHours.innerText = remainingHours
  getMinutes.innerText = remainingMinutes
  getSeconds.innerText = remainingSeconds

  setTimeout(updateWeddingCountdown, 1000)
}

// Slideshow Controls
let slideIndex = 0
let slides = document.getElementsByClassName('Containers')
let dots = document.getElementsByClassName('dots')
let timeoutHandle

showSlides()

// Function to show slides automatically
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' enable', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' enable'
  // Changes the image every 5 seconds
  timeoutHandle = setTimeout(showSlides, 5000)
}

// Function to show the current slide
function showCurrentSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' enable', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' enable'
}

// Slideshow Controls
function plusSlides(n) {
  clearTimeout(timeoutHandle)
  slideIndex += n
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex < 1) {
    slideIndex = slides.length
  }
  showCurrentSlide()
  // Restart the automatic sliding
  timeoutHandle = setTimeout(showSlides, 5000)
}

function currentSlide(n) {
  clearTimeout(timeoutHandle)
  slideIndex = n
  showCurrentSlide()
  // Restart the automatic sliding
  timeoutHandle = setTimeout(showSlides, 5000)
}

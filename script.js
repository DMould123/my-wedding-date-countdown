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
  // Get the current time
  const current = new Date().getTime()

  // Calculate the remaining time until the wedding
  const remainingTime = weddingDate - current

  // Define constants for milliseconds in seconds, minutes, hours, and days
  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24

  // Calculate the remaining days, hours, minutes, and seconds
  const remainingDays = Math.floor(remainingTime / days)
  const remainingHours = Math.floor((remainingTime % days) / hours)
  const remainingMinutes = Math.floor((remainingTime % hours) / minutes)
  const remainingSeconds = Math.floor((remainingTime % minutes) / seconds)

  // Update the elements with the new calculated values
  getDays.innerText = remainingDays
  getHours.innerText = remainingHours
  getMinutes.innerText = remainingMinutes
  getSeconds.innerText = remainingSeconds

  // Schedule the updateWeddingCountdown function to be called again after 1 second
  setTimeout(updateWeddingCountdown, 1000)
}

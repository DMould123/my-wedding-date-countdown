const getDays = document.getElementById('days')
const getHours = document.getElementById('hours')
const getMinutes = document.getElementById('minutes')
const getSeconds = document.getElementById('seconds')

const weddingDate = new Date('Sept 14, 2024, 14:55:00').getTime()

updateWeddingCountdown()

function updateWeddingCountdown() {
  const current = new Date().getTime()
  const remainingTime = weddingDate - current

  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24

  const remainingDays = Math.floor(remainingTime / days)
  console.log(remainingDays)
}

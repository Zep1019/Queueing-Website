// Loop through all courts and set up timers
document.querySelectorAll('.court-box').forEach(court => {
  const timerDisplay = court.querySelector('.timer');
  const doneBtn = court.querySelector('.done-btn');
  let seconds = 0;

  // Start timer interval
  const interval = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent =
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }, 1000);

  // Reset timer when DONE button is clicked
  doneBtn.addEventListener('click', () => {
    seconds = 0;
  });
});
var BYear = '2009';
var BMonth = '09';
var BDay = '02';
var BTime = '10:30:02';
var birthDate = new Date(`${BYear}-${BMonth}-${BDay}T${BTime}`);

function updateAge() {
    const now = new Date();
    let diff = now - birthDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);
    const remainingDays = days - Math.floor(years * 365.25);
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    const display = `${years} years, ${remainingDays} days, ${remainingHours}h ${remainingMinutes}m <span id="seconds">${remainingSeconds}s</span>`;
    document.getElementById("age").innerHTML = display;
}

updateAge();
setInterval(updateAge, 1000);
const animText = document.querySelector('.typing-text');
animText.addEventListener('animationend', function(e) {
  if (e.animationName === "typing") {
    animText.classList.add('ended');
  }
});

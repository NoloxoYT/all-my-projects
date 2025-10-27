const BYear = '2009'
const Bmonth = '09'
const Bday = '02'
const Btime = '10:30:02'
const birthDate = new Date(`${Byear}-${Bmonth}-${Bday}T${Btime}`);
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
        const display = `${years} years, ${remainingDays} days, ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
        document.getElementById("age").textContent = display;
    }
updateAge();
setInterval(updateAge, 1000);
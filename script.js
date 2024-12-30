function updateTimer() {
    const foundationDate = new Date('December 11, 1886');
    const now = new Date();
    const difference = now - foundationDate;

    // Calculate time units
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);
    const centuries = Math.floor(years / 100);

    // Update DOM elements
    document.getElementById('centuries').textContent = centuries;
    document.getElementById('years').textContent = years % 100;
    document.getElementById('days').textContent = days % 365;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

// Update timer every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Add some Arsenal chants that cycle through
const chants = [
    "Victoria Concordia Crescit",
    "We love you Arsenal, we do",
    "Arsenal 'til I die",
    "Good old Arsenal, we're proud to say that name",
    "We're the North Bank, we're the North Bank, we're the North Bank Highbury"
];

let currentChant = 0;
const chantElement = document.querySelector('.chant h3');

setInterval(() => {
    currentChant = (currentChant + 1) % chants.length;
    chantElement.textContent = chants[currentChant];
}, 5000); 
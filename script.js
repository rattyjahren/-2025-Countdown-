// Function to change the message to a New Year Countdown
function changeMessage() {
    // Change the main message text
    document.getElementById('message').textContent = "Countdown to 2025!";
    
    // Display the countdown
    document.getElementById('countdown').style.display = "block";

    // Set the countdown end time (New Year's Eve)
    const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = newYearDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "Happy New Year 2025!";
        }
    }, 1000);
}
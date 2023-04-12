function updateDateTime() {
    // Get the current date and time
    const now = new Date();
    
    // Update the date element
    const dateElement = document.getElementById('date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
    
    // Update the time element
    const timeElement = document.getElementById('time');
    timeElement.textContent = now.toLocaleTimeString();
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);  
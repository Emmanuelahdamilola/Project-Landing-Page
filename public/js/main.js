// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
  
    // Toggle the 'dark-theme' class on the body element
    body.classList.toggle('dark-theme');
  
    // Optionally, you can save the user's preference in local storage
    const isDarkMode = body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Check if user has a preference for dark mode from previous visits
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-theme');
  }
  
  // Example: Add an event listener to a button with id="theme-toggle"
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', toggleTheme);
  
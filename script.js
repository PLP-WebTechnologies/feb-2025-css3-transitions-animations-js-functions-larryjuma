// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Function to switch theme
themeToggle.addEventListener('click', () => {
  
  // Toggle the 'dark' class on the body and store it in localStorage
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Check the theme stored in localStorage and apply it
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Trigger animation for theme change 
document.body.classList.add('theme-transition');
setTimeout(() => {
  document.body.classList.remove('theme-transition');
}, 300);  // Adjust timing to match the animation duration

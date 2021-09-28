function load() {
  // Select the toggle switch button
  const button = document.querySelector('#checkbox');

  // MediaQueryList object
  const useDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Toggles the "dark-mode" class based on if the media query matches
  function toggleDarkMode(state) {
    // Older browser don't support the second parameter in the
    // classList.toggle method so you'd need to handle this manually
    // if you need to support older browsers.
    document.documentElement.classList.toggle('dark-mode', state);
  }
  
  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click
  button.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
  });
}

window.addEventListener('DOMContentLoaded', load);

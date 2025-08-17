// const toggleBtn = document.getElementById('theme-toggle');
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme) {
//   document.documentElement.setAttribute('data-theme', currentTheme);
//   toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
// }
// toggleBtn.addEventListener('click', () => {
//   const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
//   document.documentElement.setAttribute('data-theme', theme);
//   localStorage.setItem('theme', theme);
//   toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
// });

const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
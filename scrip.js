const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggles the 'active' class to show/hide the menu
});

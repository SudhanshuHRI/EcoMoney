const dropDownButton = document.getElementById('dropDownButton');
const sideMenuButton = document.getElementById('sideMenuButton');
const modelButton = document.getElementById('modelButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const sideMenu = document.getElementById('sideMenu');
const modalPopup = document.getElementById('modalPopup');

function setupToggle(button, target) {
    button.addEventListener('click', (event) => {
        target.classList.toggle('hidden');
        event.stopPropagation();

    });

    document.addEventListener('click', (event) => {
        if (!target.contains(event.target) && !button.contains(event.target)) {
            target.classList.add('hidden');
        }
    });


}
function handleClick(event) {

    event.preventDefault();

    const clickedItem = event.target.textContent;
    alert(`You clicked: ${clickedItem}`);
}


setupToggle(dropDownButton, dropdownMenu);
setupToggle(sideMenuButton, sideMenu);
// setupToggle(modelButton, modalPopup);

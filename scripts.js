function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', (event) => {
  // Get the modal
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  });

  // Open the modal
  document.getElementById('openModalBtn').addEventListener('click', () => {
    myModal.show();
  });

  // Close the modal
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    myModal.hide();
  });
});









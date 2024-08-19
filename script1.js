// Toggle mobile menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
console.log("hello");



  document.addEventListener('DOMContentLoaded', () => {
    const viewMoreButton = document.querySelector('.view-more');
    const hiddenItems = document.querySelectorAll('.portfolio-item.hidden');
  
    viewMoreButton.addEventListener('click', () => {
      hiddenItems.forEach(item => {
        item.classList.remove('hidden');
      });
      viewMoreButton.style.display = 'none'; // Hide the button after showing all items
    });
  });



  const readMoreBtn = document.querySelector(".read-more");
  const hiddenText = document.querySelector(".hidden-text");

  readMoreBtn.addEventListener("click", () => {
    hiddenText.classList.toggle("hidden-text");
    if (hiddenText.classList.contains("hidden-text")) {
      readMoreBtn.textContent = "Read More";
    } else {
      readMoreBtn.textContent = "Read Less";
    }
  });

  
document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.querySelector('.img-container');
    const navLinks = document.querySelectorAll('.slide-navigator a');
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        imgContainer.scrollTo({
          left: imgContainer.offsetWidth * index,
          behavior: 'smooth'
        });
      });
    });
  });
  
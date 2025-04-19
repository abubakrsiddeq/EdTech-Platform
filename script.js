document.addEventListener('DOMContentLoaded', () => {
  console.log('LMSNetCom is ready!');

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for sticky header
          behavior: 'smooth',
        });
      }
    });
  });

  // Dynamic course filtering (placeholder for future implementation)
  const searchInput = document.querySelector('.hero .form-control');
  const coursesSection = document.getElementById('courses');
  if (searchInput && coursesSection) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const courseCards = coursesSection.querySelectorAll('.card');
      courseCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Add a back-to-top button functionality
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
});

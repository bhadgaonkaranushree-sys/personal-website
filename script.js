// Mobile nav toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  if (!menu.contains(e.target) && !e.target.closest('.hamburger')) {
    menu.classList.remove('open');
  }
});

// Gallery image preview on upload
function previewArt(event) {
  const files = event.target.files;
  const grid = document.getElementById('galleryGrid');

  // Remove placeholder cards on first real upload
  const placeholders = grid.querySelectorAll('.placeholder-card');
  placeholders.forEach(p => p.remove());

  Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = file.name.replace(/\.[^.]+$/, '');
      card.appendChild(img);
      grid.appendChild(card);
    };
    reader.readAsDataURL(file);
  });
}

// Book Now form submission
function submitBooking() {
  const inputs = document.querySelectorAll('.book-form input, .book-form select, .book-form textarea');
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      input.style.borderColor = '#c47a5a';
    } else {
      input.style.borderColor = '';
    }
  });

  if (!allFilled) {
    alert('Please fill in all fields before booking.');
    return;
  }

  // Success state
  const btn = document.querySelector('.book-form .btn-primary');
  btn.textContent = 'Request Sent ✓';
  btn.style.background = '#6a8a5a';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Book Now ✦';
    btn.style.background = '';
    btn.disabled = false;
    inputs.forEach(input => input.value = '');
  }, 4000);
}

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--ink)';
    }
  });
}, { passive: true });

// ── Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');

hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ── Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Set min date on date input to today
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// ── Highlight current weekday in hours table
const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const todayName = dayNames[new Date().getDay()];
document.querySelectorAll('.hours-table td:first-child').forEach(td => {
  if (td.textContent.trim().startsWith(todayName)) {
    td.closest('tr').classList.add('today');
  }
});

// ── Booking form
const form = document.getElementById('bookingForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fname = document.getElementById('fname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date  = document.getElementById('date').value;

  if (!fname || !phone || !date) {
    [document.getElementById('fname'), document.getElementById('phone'), document.getElementById('date')]
      .filter(el => !el.value.trim())
      .forEach(el => {
        el.style.borderColor = '#c0392b';
        el.style.boxShadow = '0 0 0 3px rgba(192,57,43,0.12)';
        setTimeout(() => {
          el.style.borderColor = '';
          el.style.boxShadow = '';
        }, 2000);
      });
    return;
  }

  form.style.opacity = '0';
  form.style.transition = 'opacity 0.3s ease';
  setTimeout(() => {
    form.style.display = 'none';
    success.classList.add('visible');
  }, 300);
});

// ── Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--gold)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

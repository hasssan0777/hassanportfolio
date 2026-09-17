/* =======================================================
   Mobile menu toggle
======================================================= */
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

function closeNav(){
  siteNav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeNav);
});

/* =======================================================
   Active nav link on scroll (IntersectionObserver)
======================================================= */
const sections = document.querySelectorAll('main section[id], main#home');
const navLinks = document.querySelectorAll('.nav-link');

const setActive = (id) => {
  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      setActive(entry.target.id);
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

/* =======================================================
   Back-to-top button
======================================================= */
const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  toTop.classList.toggle('is-visible', window.scrollY > 500);
}, { passive: true });

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =======================================================
   Footer year
======================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =======================================================
   Contact form validation
======================================================= */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(fieldId, message){
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  field.closest('.field').classList.toggle('has-error', Boolean(message));
  errorEl.textContent = message || '';
}

function validate(){
  let valid = true;

  const name = document.getElementById('name').value.trim();
  if (!name){
    setError('name', 'Enter your name.');
    valid = false;
  } else {
    setError('name', '');
  }

  const email = document.getElementById('email').value.trim();
  if (!email){
    setError('email', 'Enter your email.');
    valid = false;
  } else if (!EMAIL_RE.test(email)){
    setError('email', 'Enter a valid email address.');
    valid = false;
  } else {
    setError('email', '');
  }

  const message = document.getElementById('message').value.trim();
  if (!message){
    setError('message', 'Write a short message.');
    valid = false;
  } else if (message.length < 10){
    setError('message', 'Message should be at least 10 characters.');
    valid = false;
  } else {
    setError('message', '');
  }

  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = '';

  if (!validate()){
    status.style.color = 'var(--accent)';
    status.textContent = 'Please fix the fields above.';
    return;
  }

  // No backend is connected in this template — replace this block with
  // a fetch() call to your form endpoint (Formspree, Netlify Forms, etc.)
  status.style.color = 'var(--teal)';
  status.textContent = `Thanks — your message is ready to send. Connect a form endpoint to deliver it.`;
  form.reset();
});

['name', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('blur', validate);
});

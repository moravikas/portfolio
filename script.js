
// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
	nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
	entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

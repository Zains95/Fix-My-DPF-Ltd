
const t = document.querySelector('.nav-toggle');
const m = document.getElementById('menu');
if (t && m){
  t.addEventListener('click', () => {
    const open = m.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

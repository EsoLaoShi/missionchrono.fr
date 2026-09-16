var NEWS_ICONS = {
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
  people: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 19c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5M13 13.7c2.8.4 5 2.6 5 5.3"/>',
  calendar: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
  car: '<path d="M4 16.5V13l1.5-4.5A2 2 0 0 1 7.4 7h9.2a2 2 0 0 1 1.9 1.5L20 13v3.5"/><path d="M4 16.5h16M6.5 16.5v2M17.5 16.5v2"/><circle cx="7.5" cy="13.5" r="1"/><circle cx="16.5" cy="13.5" r="1"/>',
  megaphone: '<path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V4l-3 5H5a2 2 0 0 0-2 2Z"/><path d="M14 8a4 4 0 0 1 0 8M17.5 5a8 8 0 0 1 0 14"/>'
};

(function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

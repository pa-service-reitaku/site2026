const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'メニューを開く');
  nav.classList.remove('open');
}));

// Add photos as assets/photo-01.jpg, photo-02.jpg, and so on. Missing numbers are skipped.
const gallery = document.querySelector('#photo-gallery');
const galleryNote = document.querySelector('.gallery-note');
for (let number = 1; number <= 40; number += 1) {
  const filename = `photo-${String(number).padStart(2, '0')}.jpg`;
  const figure = document.createElement('figure');
  figure.className = `gallery-item${number === 1 ? ' gallery-large' : ''}`;
  const image = document.createElement('img');
  image.src = `assets/${filename}`;
  image.alt = `麗澤PAサービスの活動写真 ${String(number).padStart(2, '0')}`;
  image.loading = number > 2 ? 'lazy' : 'eager';
  image.addEventListener('load', () => {
    galleryNote.hidden = true;
  });
  image.addEventListener('error', () => figure.remove(), { once: true });
  const caption = document.createElement('figcaption');
  caption.innerHTML = `<span>${String(number).padStart(2, '0')}</span>活動の様子`;
  figure.append(image, caption);
  gallery.append(figure);
}



(() => {
  const grid = document.querySelector('#group-grid');
  const search = document.querySelector('#search-input');
  if (!grid || !search) return;

  const chevronSvg = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>`;

  function setOpen(card, open) {
    const header = card.querySelector('.group-card__head');
    const content = card.querySelector('.group-card__content');
    const chevron = card.querySelector('.group-card__chevron');
    if (!header || !content) return;

    card.classList.toggle('is-open', open);
    content.hidden = !open;
    header.setAttribute('aria-expanded', String(open));
    if (chevron) chevron.setAttribute('aria-label', open ? 'Contraer área' : 'Expandir área');
  }

  function toggleCard(card) {
    const willOpen = !card.classList.contains('is-open');
    const searching = search.value.trim().length > 0;

    if (willOpen && !searching) {
      grid.querySelectorAll('.group-card.is-open').forEach(other => {
        if (other !== card) setOpen(other, false);
      });
    }

    setOpen(card, willOpen);
  }

  function prepareCard(card, index, searching) {
    if (card.dataset.accordionReady === 'true') return;

    const header = card.querySelector('.group-card__head');
    const content = card.querySelector('.group-card__content');
    const count = card.querySelector('.group-card__count');
    if (!header || !content) return;

    card.dataset.accordionReady = 'true';
    header.classList.add('group-card__trigger');
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');

    if (count) {
      const meta = document.createElement('span');
      meta.className = 'group-card__meta';
      count.replaceWith(meta);
      meta.appendChild(count);

      const chevron = document.createElement('span');
      chevron.className = 'group-card__chevron';
      chevron.innerHTML = chevronSvg;
      meta.appendChild(chevron);
    }

    header.addEventListener('click', () => toggleCard(card));
    header.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCard(card);
      }
    });

    setOpen(card, searching || index === 0);
  }

  function enhance() {
    const searching = search.value.trim().length > 0;
    const cards = [...grid.querySelectorAll('.group-card')];
    cards.forEach((card, index) => prepareCard(card, index, searching));

    if (searching) cards.forEach(card => setOpen(card, true));
  }

  const observer = new MutationObserver(enhance);
  observer.observe(grid, { childList: true });

  search.addEventListener('input', () => queueMicrotask(enhance));
  enhance();
})();

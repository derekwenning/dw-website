const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('dw-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dw-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

const filterButtons = document.querySelectorAll('.filter-button');
const pubCards = document.querySelectorAll('.pub-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    pubCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.type === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

document.querySelectorAll(".abstract-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.parentElement.nextElementSibling;
    const isOpen = panel.classList.contains("open");

    document.querySelectorAll(".abstract-panel.open").forEach((openPanel) => {
      if (openPanel !== panel) {
        openPanel.style.maxHeight = "0px";
        openPanel.style.opacity = "0";
        openPanel.classList.remove("open");
        const otherButton = openPanel.previousElementSibling.querySelector(".abstract-toggle");
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
      }
    });

    if (isOpen) {
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
      panel.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    } else {
      panel.classList.add("open");
      panel.style.opacity = "1";
      panel.style.maxHeight = panel.scrollHeight + "px";
      button.setAttribute("aria-expanded", "true");
    }
  });
});

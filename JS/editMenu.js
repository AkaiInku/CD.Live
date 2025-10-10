document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.filter-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Mostrar/ocultar menú al hacer clic en el botón
  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    dropdownMenu.style.display = expanded ? 'none' : 'block';
    toggleBtn.setAttribute('aria-expanded', !expanded);
  });

  // Ocultar menú al hacer clic fuera
  document.addEventListener('click', function (e) {
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Evitar que el menú se cierre al hacer clic dentro de él
  dropdownMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
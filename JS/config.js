document.addEventListener('click', function(e) {
  const loginBox = document.getElementById('loginBox');
  const toggle = document.getElementById('toggleLogin');
  if (
    loginBox.classList.contains('active') &&
    !loginBox.contains(e.target) &&
    e.target !== toggle &&
    !toggle.contains(e.target)
  ) {
    loginBox.classList.remove('active');
  }
});

function mostrarLogin() {
  document.getElementById('form-login').style.display = 'flex';
  document.getElementById('form-registro').style.display = 'none';
}

function mostrarRegistro() {
  document.getElementById('form-login').style.display = 'none';
  document.getElementById('form-registro').style.display = 'flex';
}

const loginBox = document.getElementById('loginBox');
loginBox.addEventListener('click', function(e) {
  e.stopPropagation();
});




function checkPassword() {
  var password = document.getElementById('password').value;
  var errorElement = document.getElementById('error');
  var errors = [];
  if (password.length < 6) {
    errors.push('Hasło musi mieć minimum 6 znaków.');
  }
  if (!/[!@#$%^&*(){}\[\]\\|:;'"<>,./?]/.test(password)) {
    errors.push('Hasło musi zawierać przynajmniej 1 znak specjalny');
  }
  if (!/\d/.test(password)) {
    errors.push('Hasło musi zawierać przynajmniej 1 cyfrę.');
  }
  if (errors.length > 0) {
    errorElement.innerHTML = errors.join('<br>');
  } else {
    errorElement.textContent = 'Prawidłowe hasło.';
  }
}

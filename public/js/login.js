const loginFormHandler = async function (event) {
  event.preventDefault();

  const email = document.querySelector('#email-login');
  const password = document.querySelector('#password-login');

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: email.value, password: password.value }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }

  // if(email && password) {

  // }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup');
  const email = document.querySelector('#email-signup');
  const password = document.querySelector('#password-signup');
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username: username.value, email: email.value, password: password.value }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);



console.log('hello')
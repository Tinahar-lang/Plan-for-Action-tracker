// js/auth.js

// LOGIN HANDLER
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Login successful!');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    });
}

// REGISTER HANDLER
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Registration successful!');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    });
}

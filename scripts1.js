// Mock login validation
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // In a real-world scenario, you would validate with a server
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'Deekshith' && password === '7676') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to main page
    } else {
        alert('Invalid username or password');
    }
});

// Mock sign up validation
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    // Mock user creation (real-world would require server-side validation)
    alert('Sign Up successful! Redirecting to login...');
    window.location.href = 'login.html'; // Redirect to login page
});

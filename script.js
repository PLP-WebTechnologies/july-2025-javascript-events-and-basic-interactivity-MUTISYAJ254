// === Part 1: Event Handling and Interactive Elements ===

// Toggle Light/Dark Theme
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Click Counter
let count = 0;
document.getElementById('counterBtn').addEventListener('click', () => {
    count++;
    document.getElementById('counterDisplay').textContent = `You have clicked ${count} times.`;
});

// Collapsible FAQ
document.querySelector('.faq-toggle').addEventListener('click', () => {
    document.querySelector('.faq-answer').classList.toggle('show');
});

// === Part 2: Custom Interactive Elements ===
// We already have 2 features: Theme toggle + Counter + FAQ collapse

// === Part 3: Custom Form Validation ===
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Stop form submission for validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('formMessage');

    // Validate fields
    if (name === "" || email === "" || password === "") {
        message.textContent = "All fields are required!";
        message.style.color = "red";
        return;
    }

    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.textContent = "Please enter a valid email!";
        message.style.color = "red";
        return;
    }

    // Password length validation
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        message.style.color = "red";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
});

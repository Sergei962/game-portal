document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const reason = document.querySelector('input[name="reason"]:checked');
    const terms = document.getElementById('terms').checked;
    const formMessage = document.getElementById('formMessage');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
        formMessage.textContent = 'Name must be at least 3 characters long.';
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (message.length < 5) {
        formMessage.textContent = 'Message must contain at least 5 characters.';
        return;
    }

    if (!reason) {
        formMessage.textContent = 'Please select a reason.';
        return;
    }

    if (!terms) {
        formMessage.textContent = 'You must agree to the terms.';
        return;
    }

    formMessage.textContent = 'Form submitted successfully!';
    this.reset();
});

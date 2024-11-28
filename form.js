document.getElementById('validationForm').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        e.preventDefault();
    }
});
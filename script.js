document.addEventListener('DOMContentLoaded', function() {
    const phonePicker = document.getElementById('phonePicker');
    const selectedPhone = document.getElementById('selectedPhone');

    phonePicker.addEventListener('change', function() {
        selectedPhone.textContent = `You selected: ${phonePicker.value}`;
    });
});
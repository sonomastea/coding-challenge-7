document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const rating = form.rating.value;
        const comments = form.comments.value.trim();

        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }

        const feedback = document.createElement('div');
        feedback.classList.add('feedback-entry');
        feedback.innerHTML = `<strong>Name:</strong> ${name}<br>
                              <strong>Rating:</strong> ${rating}<br>
                              <strong>Comments:</strong> ${comments}`;

        feedbackDisplay.appendChild(feedback);

        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('contactForm');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Show success message
        alert('Your response has been successfully submitted!');

        // Optionally, you can reset the form fields
        form.reset();
    });
});
function showDetails() {
    var details = document.getElementById('stopwatch-details');
    if (details.style.display === 'none') {
        details.style.display = 'block'; // Show details
    } else {
        details.style.display = 'none'; // Hide details
    }
}


function showDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}



function showDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}


function showDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

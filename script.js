document.getElementById('book-now').addEventListener('click', function() {
    alert('Redirecting to booking page...');
    window.location.href = 'booking.html'; // Replace with your booking page
});




// Optional: Auto-slide functionality for mobile view
const servicesList = document.querySelector('.services-list');
if (isMobile) {
    let start = 0;
    setInterval(() => {
        servicesList.scrollBy({ left: servicesList.offsetWidth, behavior: 'smooth' });
        start += 1;
        if (start === servicesList.childElementCount) {
            start = 0;
            servicesList.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 3000); // Change slide every 3 seconds
}



// Optional: Auto-slide functionality for mobile view
const roomsList = document.querySelector('.rooms-list');
let isMobileRooms = window.matchMedia("(max-width: 768px)").matches;

if (isMobileRooms) {
    let start = 0;
    setInterval(() => {
        roomsList.scrollBy({ left: roomsList.offsetWidth, behavior: 'smooth' });
        start += 1;
        if (start === roomsList.childElementCount) {
            start = 0;
            roomsList.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 3000); // Change slide every 3 seconds
}




document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show confirmation message
    document.getElementById('confirmation-message').classList.remove('hidden');

    // Optionally, you can process the form data here
    // For example, sending it to a server or local storage
});





// Optional: Auto-slide functionality for mobile view
const amenitiesList = document.querySelector('.amenities-list');
let isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    let start = 0;
    setInterval(() => {
        amenitiesList.scrollBy({ left: amenitiesList.offsetWidth, behavior: 'smooth' });
        start += 1;
        if (start === amenitiesList.childElementCount) {
            start = 0;
            amenitiesList.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 3000); // Change slide every 3 seconds
}






// Optional: Auto-slide functionality for mobile view
const reviewsList = document.querySelector('.reviews-list');
let isMobileReviews = window.matchMedia("(max-width: 768px)").matches;

if (isMobileReviews) {
    let start = 0;
    setInterval(() => {
        reviewsList.scrollBy({ left: reviewsList.offsetWidth, behavior: 'smooth' });
        start += 1;
        if (start === reviewsList.childElementCount) {
            start = 0;
            reviewsList.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 5000); // Change slide every 5 seconds
}

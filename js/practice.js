let left_button = document.getElementById('left');
let right_button = document.getElementById('right');
let images = document.querySelectorAll('.image')
// document.querySelector = document.getElementById()
// images = [image0, image1, image2]

let currentIndex = 0;


// Function to show a specific slide
    function showSlide(index) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        // Show the selected image
        images[index].classList.add('active');

        // Update current index
        currentIndex = index;
    }

    // Next slide function
    function nextSlide() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= images.length) nextIndex = 0;
        showSlide(nextIndex);
    }

    // Previous slide function
    function prevSlide() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = images.length - 1;
        showSlide(prevIndex);
    }

    // Event listeners for buttons
    left_button.addEventListener('click', prevSlide);
    right_button.addEventListener('click', nextSlide);







// setInterval(switchImages,5000)




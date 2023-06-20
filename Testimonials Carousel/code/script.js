var testimonials = [
  { text: 'This is the best service ever!', author: 'John Doe' },
  { text: 'I love it! Highly recommended.', author: 'Jane Doe' },
  { text: 'A must-have for everyone.', author: 'James Smith' },
  // Add more testimonials as needed
];

var currentTestimonial = 0;

function changeTestimonial() {
  // Change the testimonial text and author
  document.getElementById('testimonial-text').textContent = testimonials[currentTestimonial].text;
  document.getElementById('testimonial-author').textContent = '- ' + testimonials[currentTestimonial].author;

  // Update the current testimonial index
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;

  // Fade in the new testimonial
  var testimonialDiv = document.getElementById('testimonial');
  testimonialDiv.style.opacity = 0;
  setTimeout(function() { testimonialDiv.style.opacity = 1; }, 500);
}

// Change the testimonial every 3 seconds
setInterval(changeTestimonial, 3000);

// Start the testimonials
// changeTestimonial();

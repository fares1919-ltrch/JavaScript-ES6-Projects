// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Create an object to store form data
    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    // Store form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
  
    // Alert the user and reset the form
    alert(`Thank you, ${name}! Your submission has been saved.`);
    document.getElementById('contactForm').reset();
  });
  
  // Retrieve form data from localStorage when the page loads
  window.onload = function () {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      document.getElementById('name').value = formData.name;
      document.getElementById('email').value = formData.email;
      document.getElementById('message').value = formData.message;
    }
  };
  
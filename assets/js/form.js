document.addEventListener('DOMContentLoaded', function () {
    // Function to validate the form
    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pattern for email validation
  
        if (name.trim() === "") {
            alert("Please enter your name.");
            return false;
        }
  
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
  
        if (message.trim() === "") {
            alert("Please enter your message.");
            return false;
        }
  
        // Validation passed
        return true;
    }
  
    // Event listener for form submission
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
  
        // Call the validateForm function and check if the form is valid
        if (validateForm()) {
            // If the form is valid, you can proceed with form submission or other actions
            alert("Form is valid, submitting...");
            // Here you would typically submit the form to a server
            // contactForm.submit();
        }
    });
  });
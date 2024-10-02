function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

/*toggle icon navbar*/

let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll section active link*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

Window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*sticky*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    /*remove toogle icon and navbar when click navbar(scroll)*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




  function doPost(e) {
    try {
      var fullName = e.parameter.fullName;
      var emailAddress = e.parameter.emailAddress;
      var mobileNumber = e.parameter.mobileNumber;
      var emailSubject = e.parameter.emailSubject;
      var message = e.parameter.message;
  
      var emailBody = `
        Full Name: ${fullName}\n
        Email Address: ${emailAddress}\n
        Mobile Number: ${mobileNumber}\n
        Subject: ${emailSubject}\n
        Message: ${message}
      `;
  
      // Logging for debugging
      Logger.log('Received data: ' + JSON.stringify(e.parameter));
  
      MailApp.sendEmail({
        to: "your-email@gmail.com",
        subject: "New Contact Form Submission: " + emailSubject,
        body: emailBody
      });
  
      return ContentService.createTextOutput("Form submitted successfully");
    } catch (error) {
      Logger.log('Error: ' + error.message);
      return ContentService.createTextOutput("Error submitting the form");
    }
  }
  
  document.getElementById('contacts').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the form
    if (this.checkValidity()) {
        // Hide the button and show the spinner
        document.getElementById('sendButton').style.display = 'none';
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'inline-block';

        // Simulate an asynchronous action (e.g., an API call)
        setTimeout(() => {
            // Hide spinner and show button again after 3 seconds
            spinner.style.display = 'none';
            document.getElementById('sendButton').style.display = 'inline-block';

            // Optionally reset the form
            this.reset();
        }, 3000);
    } else {
        // If the form is invalid, show an alert or handle it accordingly
        alert("Please fill out all required fields correctly.");
    }
});

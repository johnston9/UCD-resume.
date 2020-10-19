function sendMail(contactForm) {
    emailjs.send("gmail", "template_eaz8ew4", {
       "from_name": contactForm.name.value,
       "from_email": contactForm.emailaddress.value,
        "project_summary": contactForm.projectsummary.value   
    }).then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

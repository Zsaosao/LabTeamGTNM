function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        message: document.getElementById("message").value

    }
    emailjs.send("service_oe1mrug", "template_gnz3tvx", params).then(alert("Email sent successfully!")
    );

}

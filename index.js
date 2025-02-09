document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

   
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Thank you for reaching out, " + name + "!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerText = "Please fill in all fields.";
    }
});
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank You! Your message has been sent successfully.");

    form.reset();
});
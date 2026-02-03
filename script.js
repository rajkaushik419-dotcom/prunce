document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("no-btn");
    let yesBtn = document.getElementById("yes-btn");
    let notAllowedMessage = document.getElementById("not-allowed-message");

    // "No" button click event
    noBtn.addEventListener("click", () => {
        notAllowedMessage.style.display = "block";  // Show "Not Allowed" message
    });

    // "Yes" button click event
    yesBtn.addEventListener("click", () => {
        // Redirect to the "congratulations.html" page
        window.location.href = "congratulations.html";  // Open new page
    });
});
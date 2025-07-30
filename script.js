document.getElementById("instagram").addEventListener("click", () => {
    window.open("https://www.instagram.com/antran103", "_blank");
});

document.getElementById("phone").addEventListener("click", () => {
    navigator.clipboard.writeText("7148009119");
    alert("Copied Phone Number!");
});

document.getElementById("email").addEventListener("click", () => {
    navigator.clipboard.writeText("antran103@gmail.com");
    alert("Copied Email!");
});

document.getElementById("venmo").addEventListener("click", () => {
    navigator.clipboard.writeText("Anna-Tran-17");
    alert("Copied Venmo!");
});

/*function sendEmail() {
    const email = "antran103@gmail.com";
    const subject = "Hello! I have a cookie inquiry";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}*/
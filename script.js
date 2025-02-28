function konprobaketa(event) {
    event.preventDefault();
    const emaila = document.getElementById("emaila").value;
    const emaitza = document.getElementById("testua");

    if (emaila.includes("@"))  {
        emaitza.textContent = "Emaila Egokia da!";
        emaitza.style.color = "green";
    } else {
        emaitza.textContent = "Errorea: Emailak '@' izan behar du.";
        emaitza.style.color = "red";
    }
}

document.getElementById("konprobaketa").addEventListener("click", konprobaketa);

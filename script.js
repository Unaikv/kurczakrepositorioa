document.addEventListener("DOMContentLoaded", () => {
    const pertsonalizatzailea = document.getElementById("pertsonalizatzailea");
    const botoiaPertsonalizazioa = document.getElementById("pertsonalizatzailea-aldatu");
    const testua = document.getElementById("testua");


    botoiaPertsonalizazioa.addEventListener("click", () => {
        pertsonalizatzailea.style.display = (pertsonalizatzailea.style.display === "block") ? "none" : "block";
    });


    document.querySelectorAll(".botoia-kolorea").forEach(botoia => {
        botoia.addEventListener("click", () => {
            document.body.className = "";
            document.body.classList.add(botoia.classList[1]);
        });
    });
});

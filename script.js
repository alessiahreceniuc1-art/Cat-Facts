const btn = document.getElementById("new-fact-btn");
const factParagraph = document.getElementById("cat-fact");

// Functie asincronă pentru fetch
async function fetchCatFact() {
    console.log("Cerere trimisă către https://catfact.ninja/fact");

    try {
        const response = await fetch("https://catfact.ninja/fact");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Date primite cu succes:", data);

        // Populează cardul
        factParagraph.textContent = data.fact;

    } catch (error) {
        console.error("Eroare la preluarea faptului:", error);
        alert("Ne pare rău, nu s-a putut prelua un fapt despre pisici. Încearcă din nou!");
    }
}

// Event listener pentru buton
btn.addEventListener("click", fetchCatFact);

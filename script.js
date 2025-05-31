
async function askDroitGPT() {
    const input = document.getElementById("userInput").value;
    const output = document.getElementById("responseOutput");
    output.innerText = "Chargement...";

    try {
        const response = await fetch("https://droitgpt-backend.repl.co/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: input })
        });

        const data = await response.json();
        output.innerText = data.answer || "Erreur de réponse";
    } catch (error) {
        output.innerText = "Erreur de connexion au serveur";
    }
}

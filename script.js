
let OPENAI_API_KEY = "";

function setApiKey() {
    const key = prompt("Entrez votre clé API OpenAI :");
    if (key && key.startsWith("sk-")) {
        OPENAI_API_KEY = key;
        alert("Clé API enregistrée.");
    } else {
        alert("Clé invalide. Elle doit commencer par 'sk-'.");
    }
}

async function askDroitGPT() {
    const input = document.getElementById("userInput").value;
    const output = document.getElementById("responseOutput");

    if (!OPENAI_API_KEY) {
        output.innerText = "Veuillez d'abord définir votre clé API.";
        return;
    }

    output.innerText = "Chargement...";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: input }]
            })
        });

        const data = await response.json();
        output.innerText = data.choices?.[0]?.message?.content || "Erreur de réponse.";
    } catch (error) {
        output.innerText = "Erreur lors de la requête : " + error.message;
    }
}

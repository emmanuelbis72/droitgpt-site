async function askDroitGPT() {
    const input = document.getElementById("userInput").value;
    const output = document.getElementById("responseOutput");
    output.innerText = "Chargement...";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();
    output.innerText = data.choices?.[0]?.message?.content || "Erreur de réponse";
}

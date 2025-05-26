const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

chatForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userText = userInput.value.trim();
    if (userText === "") return;

    addMessage("user", userText);
    userInput.value = "";

    setTimeout(() => {
        const botReply = generateBotReply(userText);
        addMessage("bot", botReply);
    }, 500);
});

function addMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hej")) return "Hej på dig! Hur mår du?";
    if (lowerInput.includes("vad kan du göra")) return "Jag kan svara på enkla frågor och hålla dig sällskap!";
    if (lowerInput.includes("tack")) return "Varsågod!";
    return "Det där förstod jag inte riktigt. Vill du försöka säga det på ett annat sätt?";
}

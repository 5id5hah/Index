// Open Chatbot
document.getElementById("open-chatbot").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "block";
    this.style.display = "none";
});

// Close Chatbot
document.getElementById("close-chatbot").addEventListener("click", function() {
    document.getElementById("chatbot").style.display = "none";
    document.getElementById("open-chatbot").style.display = "block";
});

// Send Message
document.getElementById("send-message").addEventListener("click", function() {
    var input = document.getElementById("chatbot-input").value;
    if (input.trim() !== "") {
        var userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.textContent = input;
        document.querySelector(".chatbot-messages").appendChild(userMessage);

        document.getElementById("chatbot-input").value = "";

        // Simulate bot response
        setTimeout(function() {
            var botMessage = document.createElement("div");
            botMessage.className = "message bot-message";
            botMessage.textContent = "Thank you for your message. How can I help you further?";
            document.querySelector(".chatbot-messages").appendChild(botMessage);
            document.querySelector(".chatbot-messages").scrollTop = document.querySelector(".chatbot-messages").scrollHeight;
        }, 1000);
    }
});
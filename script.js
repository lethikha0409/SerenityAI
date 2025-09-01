document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    function appendMessage(message, sender) {
        const msgElement = document.createElement("div");
        msgElement.classList.add("message", sender);
        msgElement.textContent = message;
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botTyping(message, delay = 1000) {
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("bot-typing");
        typingIndicator.textContent = "SERENITY AI: Typing...";
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            typingIndicator.remove();
            appendMessage(message, "bot");
        }, delay);
    }

    function handleConversation(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (!askedName) {
            botTyping("SERENITY AI: Hello! I'm Serenity, your mental health assistant. It's really great that you're reaching out today. What should I call you?", 2000);
            askedName = true;
        } else if (!userName) {
            userName = message;
            botTyping(`SERENITY AI: Hi, ${userName}! I'm so glad we’re talking today. How are you feeling right now? It's okay if you're not sure, take your time.`, 2000);
        } else if (!askedFeeling) {
            botTyping("SERENITY AI: I appreciate you sharing. Can you tell me more about what you're feeling right now? Are there specific emotions that feel stronger for you today?", 2000);
            askedFeeling = true;
        } else if (!askedTalkedToAnybody) {
            botTyping("SERENITY AI: Sometimes it helps to talk things through with someone. Have you had a chance to speak to anyone about what you're going through? If not, that's okay too.", 2000);
            askedTalkedToAnybody = true;
        } else if (!askedSituation) {
            botTyping("SERENITY AI: Would you like to share a bit more about what's been going on? I’m here to listen and understand how you're feeling.", 2000);
            askedSituation = true;
        } else if (!providedSolution) {
            if (lowerCaseMessage.includes("depressed")) {
                botTyping("SERENITY AI: I’m really sorry you’re feeling this way. Remember, it’s okay to reach out for help, and things can improve. Here are some suggestions that might help you feel better:", 2000);
                botTyping("1. **Seek professional help**\n2. **Practice self-care**\n3. **Start small**\n4. **Talk to someone you trust**", 3000);
            } else if (lowerCaseMessage.includes("stressed")) {
                botTyping("SERENITY AI: Stress is tough, but there are ways to manage it. Here are a few things you can try:", 2000);
                botTyping("1. **Practice relaxation techniques**\n2. **Set clear boundaries**\n3. **Break tasks into smaller steps**\n4. **Take breaks**", 3000);
            } else if (lowerCaseMessage.includes("anxious")) {
                botTyping("SERENITY AI: Anxiety can be overwhelming, but there are strategies to cope. Let’s try some of these approaches:", 2000);
                botTyping("1. **Practice mindfulness**\n2. **Challenge negative thoughts**\n3. **Set aside worry time**\n4. **Stay connected**", 3000);
            } else if (lowerCaseMessage.includes("lonely")) {
                botTyping("SERENITY AI: Loneliness is hard, but it doesn’t have to be permanent. Here are some ways you can feel more connected:", 2000);
                botTyping("1. **Reach out to loved ones**\n2. **Join a community**\n3. **Practice self-compassion**\n4. **Volunteer**", 3000);
            } else if (lowerCaseMessage.includes("insecure")) {
                botTyping("SERENITY AI: Insecurity is tough, but you're not alone in feeling this way. Here are some ways to start building your confidence:", 2000);
                botTyping("1. **Practice self-compassion**\n2. **Challenge negative self-talk**\n3. **Celebrate your strengths**\n4. **Set personal goals**", 3000);
            } else if (lowerCaseMessage.includes("overthinking")) {
                botTyping("SERENITY AI: Overthinking can be draining, but you can regain control. Here are some strategies:", 2000);
                botTyping("1. **Practice mindfulness**\n2. **Break problems into manageable steps**\n3. **Challenge your thoughts**\n4. **Distract yourself with enjoyable activities**", 3000);
            } else if (lowerCaseMessage.includes("burnout")) {
                botTyping("SERENITY AI: Burnout can sneak up on us when we push too hard for too long. Here’s what might help:", 2000);
                botTyping("1. **Take regular breaks**\n2. **Prioritize sleep and nutrition**\n3. **Delegate or reduce your workload**\n4. **Engage in hobbies or creative outlets**", 3000);
            } else if (lowerCaseMessage.includes("grief") || lowerCaseMessage.includes("loss")) {
                botTyping("SERENITY AI: Coping with grief or loss can be deeply painful. You don’t have to carry it alone. Here’s what may help:", 2000);
                botTyping("1. **Allow yourself to feel**\n2. **Talk about your memories or feelings**\n3. **Seek support from loved ones or a grief counselor**\n4. **Take your time—healing isn’t linear**", 3000);
            } else if (lowerCaseMessage.includes("rejected") || lowerCaseMessage.includes("breakup")) {
                botTyping("SERENITY AI: Rejection and breakups can leave a heavy emotional toll. You’re not alone. Try these steps:", 2000);
                botTyping("1. **Acknowledge your emotions—it's okay to feel hurt**\n2. **Avoid blaming yourself**\n3. **Do things that make you feel valued**\n4. **Give yourself space and time to heal**", 3000);
            } else if (lowerCaseMessage.includes("unmotivated") || lowerCaseMessage.includes("no purpose")) {
                botTyping("SERENITY AI: Feeling unmotivated can feel like being stuck, but you can gently work through it. Try these:", 2000);
                botTyping("1. **Start with small, simple goals**\n2. **Celebrate little wins**\n3. **Reconnect with passions or hobbies**\n4. **Talk to someone about what you’re feeling**", 3000);
            } else {
                botTyping("SERENITY AI: I’m here to support you, no matter what you’re feeling. Would you like to talk more about what you're going through or need some suggestions for specific challenges?", 2000);
            }
            providedSolution = true;
        } else if (!askedFurtherAssistance) {
            botTyping("SERENITY AI: You’re doing really well by being here and talking about your feelings. Is there anything else I can do to support you right now? I’m happy to help with anything, big or small.", 2000);
            askedFurtherAssistance = true;
        } else if (!endedConversation) {
            if (lowerCaseMessage.includes("no")) {
                botTyping(`SERENITY AI: I understand, ${userName}. Remember that it’s okay to take a break and come back whenever you’re ready to talk. You're never alone in your journey. Wishing you peace and self-compassion. Take care.`, 2000);
                endedConversation = true;
                userInput.disabled = true;
                sendBtn.style.display = "none";
            } else if (lowerCaseMessage.includes("yes")) {
                botTyping("SERENITY AI: I’m really glad you reached out for help. Here are some helplines you can contact for immediate support:\n\n- **Vandrevala Foundation (Mental Health Helpline): 9152987821, 9152987822**\n- **Samaritans Mumbai (Emotional Support): 91-842-298-4514**\n- **National Mental Health Support Line (India): 9152987821**\n- **Childline (Crisis Helpline for children): 1098**", 2000);
                endedConversation = true;
                userInput.disabled = true;
                sendBtn.style.display = "none";
            } else {
                botTyping("SERENITY AI: How can I assist you further? I’m always here to listen and help when you’re ready.", 2000);
            }
        }
    }

    let askedName = false;
    let userName = "";
    let askedFeeling = false;
    let askedTalkedToAnybody = false;
    let askedSituation = false;
    let providedSolution = false;
    let askedFurtherAssistance = false;
    let endedConversation = false;

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== "") {
            appendMessage(message, "user");
            userInput.value = "";
            handleConversation(message);
        }
    }
});

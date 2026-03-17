let currentMode = 'summarize';

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(mode)) btn.classList.add('active');
    });
}

function runAnalysis() {
    const input = document.getElementById('userInput').value;
    const resultBox = document.getElementById('resultContainer');
    const aiText = document.getElementById('aiText');
    const resultTitle = document.getElementById('resultTitle');
    const btn = document.getElementById('actionBtn');

    if (input.trim().length < 20) {
        alert("Your Excellency Redha, the text is too short for a professional analysis!");
        return;
    }

    btn.innerText = "RUNNING REDHA'S LOGIC ENGINE...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "INITIATE NEURAL SCAN";
        btn.disabled = false;
        resultBox.classList.remove('hidden');

        // استخراج أهم جملة من نص المستخدم لجعل النتيجة تبدو حقيقية
        const sentences = input.split(/[.!?]/).filter(s => s.trim().length > 5);
        const mainPoint = sentences[0] || "this topic";

        let response = "";

        if (currentMode === 'summarize') {
            resultTitle.innerText = "✦ EXECUTIVE SUMMARY";
            response = `Redha's Analysis: The core focus of your material is on "${mainPoint}". \n\nStrategic Summary: To master this efficiently, prioritize the relationship between the key variables mentioned. This content is essential for a deep understanding of the subject matter.`;
        } 
        else if (currentMode === 'quiz') {
            resultTitle.innerText = "✦ KNOWLEDGE CHECK (QUIZ)";
            response = `1. Based on your text, what is the significance of "${mainPoint}"?\n2. Identify the primary evidence used to support the main argument.\n3. How would you apply the concepts from this text in a real-world scenario?`;
        } 
        else if (currentMode === 'simplify') {
            resultTitle.innerText = "✦ SIMPLIFIED EXPLANATION";
            response = `Think of "${mainPoint}" as the foundation of a building. Everything else you read is just adding floors on top. Keep it simple: focus on the base first, and the rest will make sense!`;
        }

        // تأثير الكتابة (Typing Effect)
        typeWriter(aiText, response);
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
}

function typeWriter(element, text) {
    element.innerHTML = "";
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 20);
}

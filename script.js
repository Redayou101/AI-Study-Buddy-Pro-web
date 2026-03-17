let currentMode = 'summarize';

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // تفعيل الزر المختار
    if (mode === 'summarize') document.getElementById('btn-summarize').classList.add('active');
    if (mode === 'quiz') document.getElementById('btn-quiz').classList.add('active');
    if (mode === 'simplify') document.getElementById('btn-simplify').classList.add('active');
}

function runAnalysis() {
    const input = document.getElementById('userInput').value;
    const resultBox = document.getElementById('resultContainer');
    const aiText = document.getElementById('aiText');
    const resultTitle = document.getElementById('resultTitle');
    const btn = document.getElementById('actionBtn');

    if (input.trim().length < 10) {
        alert("Your Excellency Redha, please enter more content for analysis.");
        return;
    }

    btn.innerText = "REDHA'S NEURAL SCAN IN PROGRESS...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "INITIATE NEURAL SCAN";
        btn.disabled = false;
        resultBox.classList.remove('hidden');

        const firstSent = input.split('.')[0].substring(0, 60);
        let response = "";

        if (currentMode === 'summarize') {
            resultTitle.innerText = "✦ EXECUTIVE SUMMARY";
            response = `Analysis of "${firstSent}...": \n\nThis material is synthesized as a core academic framework. Redha's logic engine suggests focusing on the foundational theories presented to ensure complete mastery.`;
        } else if (currentMode === 'quiz') {
            resultTitle.innerText = "✦ KNOWLEDGE CHECK";
            response = `1. Based on your input, what defines the core of "${firstSent}"?\n2. Identify the main argument presented in the text.\n3. How would you explain these concepts to a peer?`;
        } else if (currentMode === 'simplify') {
            resultTitle.innerText = "✦ SIMPLIFIED EXPLANATION";
            response = `Think of "${firstSent}" as the start of a journey. You don't need to know every detail yet, just understand the basic path. Everything else is just extra gear for your trip!`;
        }

        aiText.innerText = response;
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
}

function copyResult() {
    const text = document.getElementById('aiText').innerText;
    navigator.clipboard.writeText(text);
    alert("Insights copied! Verified by Redha Younes.");
}

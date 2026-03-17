let currentMode = 'summarize';

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (mode === 'summarize') document.getElementById('btn-sum').classList.add('active');
    if (mode === 'quiz') document.getElementById('btn-quiz').classList.add('active');
    if (mode === 'simplify') document.getElementById('btn-simp').classList.add('active');
}

function runAnalysis() {
    const input = document.getElementById('userInput').value;
    const resultBox = document.getElementById('resultContainer');
    const aiText = document.getElementById('aiText');
    const resultTitle = document.getElementById('resultTitle');
    const btn = document.getElementById('actionBtn');

    if (input.trim().length < 10) {
        alert("Your Excellency Redha, please provide content to analyze.");
        return;
    }

    btn.innerText = "REDHA'S NEURAL SCANNING...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "INITIATE NEURAL SCAN";
        btn.disabled = false;
        resultBox.classList.remove('hidden');

        const preview = input.split('.')[0].substring(0, 50);
        let response = "";

        if (currentMode === 'summarize') {
            resultTitle.innerText = "✦ EXECUTIVE SUMMARY";
            response = `Analysis of "${preview}...": This material outlines a sophisticated framework. We recommend focusing on the logical progression of the arguments to ensure complete mastery.`;
        } else if (currentMode === 'quiz') {
            resultTitle.innerText = "✦ KNOWLEDGE CHECK";
            response = `1. Based on your text, what defines "${preview}"?\n2. Identify the primary objective mentioned.\n3. How would you apply these insights in a practical setting?`;
        } else if (currentMode === 'simplify') {
            resultTitle.innerText = "✦ SIMPLIFIED EXPLANATION";
            response = `Think of "${preview}" as the foundation of a structure. Instead of looking at the whole complex building, just focus on this base layer first. Everything else builds on top of it!`;
        }

        aiText.innerText = response;
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
}

function copyResult() {
    const text = document.getElementById('aiText').innerText;
    navigator.clipboard.writeText(text);
    alert("Insights copied! Designed by Redha Younes.");
}

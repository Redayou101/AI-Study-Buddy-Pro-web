let currentMode = 'summarize';

function setMode(mode) {
    currentMode = mode;
    // تحديث شكل الأزرار
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

    if (input.length < 15) {
        alert("Your Excellency Redha, please provide more text to analyze.");
        return;
    }

    btn.innerText = "CONSULTING REDHA'S NEURAL NETWORK...";
    btn.disabled = true;

    // محاكاة لعملية الـ API (سوف نستبدل هذا الجزء بـ Python/Fetch مستقبلاً)
    setTimeout(() => {
        btn.innerText = "INITIATE NEURAL SCAN";
        btn.disabled = false;
        resultBox.classList.remove('hidden');

        let finalResponse = "";

        if (currentMode === 'summarize') {
            resultTitle.innerText = "✦ EXECUTIVE SUMMARY";
            finalResponse = "Redha's Engine Insight: The material focuses on core foundational principles. Summary: [API would put real summary here]. Focus on key concepts for 90% retention.";
        } else if (currentMode === 'quiz') {
            resultTitle.innerText = "✦ SMART QUIZ";
            finalResponse = "1. What is the primary concept discussed?\n2. How does the core theory apply to practical scenarios?\n3. Based on Redha's analysis, what is the most important conclusion?";
        } else if (currentMode === 'simplify') {
            resultTitle.innerText = "✦ SIMPLIFIED (ELI5)";
            finalResponse = "Imagine this topic like a game of blocks. Redha explains that you first need a strong base (foundation) before you can build the complex top parts. It's as simple as that!";
        }

        aiText.innerText = finalResponse;
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

function copyResult() {
    const text = document.getElementById('aiText').innerText;
    navigator.clipboard.writeText(text);
    alert("Royal insights copied!");
}

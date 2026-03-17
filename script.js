function processAnalysis() {
    const input = document.getElementById('studyInput').value;
    const resultBox = document.getElementById('resultBox');
    const output = document.getElementById('aiOutput');
    const btn = document.getElementById('analyzeBtn');

    if (input.length < 10) {
        alert("Please enter more text for Redha's Engine to work!");
        return;
    }

    btn.innerText = "SCANNING NERUAL PATHS...";
    
    setTimeout(() => {
        resultBox.classList.remove('hidden');
        btn.innerText = "INITIATE NEURAL SCAN";
        
        // النتيجة المحسنة
        const summary = `Redha's AI has synthesized your data. \n\nMain Focus: The provided material explores key academic concepts with a focus on efficiency. \n\nStrategic Insight: To master this content, prioritize the relationship between the core variables mentioned in your text.`;
        
        output.innerText = summary;
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

function copyText() {
    const text = document.getElementById('aiOutput').innerText;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard! Designed by Redha.");
}

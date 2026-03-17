function runAnalysis() {
    const input = document.getElementById('userInput').value;
    const resultBox = document.getElementById('resultContainer');
    const aiText = document.getElementById('aiText');
    const btn = document.getElementById('actionBtn');

    if (input.length < 15) {
        alert("Your Excellency Redha, please provide more text to analyze.");
        return;
    }

    // تأثير التحميل
    btn.innerText = "PROCESSING NEURAL DATA...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "INITIATE NEURAL SCAN";
        btn.disabled = false;
        
        // إظهار النتيجة
        resultBox.classList.remove('hidden');
        
        // نص النتيجة (بإمكانك تعديله مستقبلاً)
        const summary = "Redha's Neural Engine has completed the scan. \n\nKey Insight: Your material emphasizes the importance of core foundational concepts. To maximize learning, Redha suggests focusing on the high-level summary provided and linking it to practical applications.";
        
        aiText.innerText = summary;
        
        // نزول تلقائي للنتيجة
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
}

function copyResult() {
    const text = document.getElementById('aiText').innerText;
    navigator.clipboard.writeText(text);
    alert("Royal insights copied!");
}

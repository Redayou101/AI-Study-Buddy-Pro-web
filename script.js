function startNeuralAnalysis() {
    const input = document.getElementById('studyInput').value;
    const resultArea = document.getElementById('resultArea');
    const output = document.getElementById('aiSummary');
    const btn = document.getElementById('analyzeBtn');

    if (input.trim().length < 20) {
        alert("Please provide more content for Redha's Engine to analyze!");
        return;
    }

    // تأثير الانتظار
    btn.innerText = "Analyzing Neural Data...";
    btn.style.opacity = "0.5";
    
    setTimeout(() => {
        btn.innerText = "Initiate Analysis";
        btn.style.opacity = "1";
        resultArea.classList.remove('hidden');

        // منطق "التلخيص" - يأخذ أول جملة ويضيف عليها لمسة ذكاء
        const firstSentence = input.split(/[.!?]/)[0];
        const resultText = `Redha's AI Analysis Complete:\n\nThe core of your material focuses on "${firstSentence}". Based on this, we can conclude that the primary objective is to streamline the understanding of these academic concepts for better retention. Focus on the foundational elements mentioned in your text for maximum efficiency.`;

        // تشغيل تأثير الكتابة
        typeEffect(output, resultText);
        
        // التمرير للأسفل لرؤية النتيجة
        resultArea.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

function typeEffect(element, text) {
    element.innerHTML = "";
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 30);
}

// تحديث عداد الكلمات
document.getElementById('studyInput').addEventListener('input', function() {
    const words = this.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById('wCount').innerText = words;
});

function copyToClipboard() {
    const text = document.getElementById('aiSummary').innerText;
    navigator.clipboard.writeText(text);
    alert("Results copied! Great job, Redha.");
}

function scrollToApp() {
    document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

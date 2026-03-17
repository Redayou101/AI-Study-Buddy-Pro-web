// تحديد النمط الافتراضي
let currentMode = 'summarize';

// وظيفة التبديل بين الأنماط (تعدد المهام)
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

    // التحقق من النص
    if (input.trim().length < 10) {
        alert("Your Excellency Redha, please enter some text for analysis.");
        return;
    }

    // تأثير التحميل الفخم
    btn.innerText = "CONSULTING REDHA'S ENGINE...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "INITIATE NEURAL SCAN";
        btn.disabled = false;
        resultBox.classList.remove('hidden');

        // منطق التحليل الذكي (بدون API)
        const firstLine = input.split('\n')[0].substring(0, 50);
        let response = "";

        if (currentMode === 'summarize') {
            resultTitle.innerText = "✦ EXECUTIVE SUMMARY";
            response = `Analysis of "${firstLine}...": \n\nThis material covers essential academic foundations. Redha's Engine recommends focusing on the structural relationships within the text to achieve 95% retention.`;
        } else if (currentMode === 'quiz') {
            resultTitle.innerText = "✦ SMART QUIZ";
            response = `1. What is the primary objective of "${firstLine}"?\n2. Identify three key supporting details from the provided text.\n3. How does this concept integrate with your existing knowledge?`;
        } else if (currentMode === 'simplify') {
            resultTitle.innerText = "✦ SIMPLIFIED (ELI5)";
            response = `Think of this like building a Lego tower. You've provided the base blocks "${firstLine}". To make it stand, you just need to connect the pieces we identified in your text!`;
        }

        // إظهار النتيجة بتأثير سلس
        aiText.innerText = response;
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

function copyResult() {
    const text = document.getElementById('aiText').innerText;
    navigator.clipboard.writeText(text);
    alert("Royal insights copied to clipboard!");
}

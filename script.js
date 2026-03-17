// تحديد الوضع الافتراضي
let currentMode = 'summarize';

// دالة لتغيير الأزرار (تعدد الوظائف)
function setMode(mode) {
    currentMode = mode;
    
    // إزالة التفعيل من كل الأزرار
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // تفعيل الزر الذي تم الضغط عليه
    if (mode === 'summarize') document.getElementById('btn-summarize').classList.add('active');
    if (mode === 'quiz') document.getElementById('btn-quiz').classList.add('active');
    if (mode === 'simplify') document.getElementById('btn-simplify').classList.add('active');
}

// دالة التحليل الرئيسية
function runAnalysis() {
    const input = document.getElementById('userInput').value;
    const resultBox = document.getElementById('resultContainer');
    const aiText = document.getElementById('aiText');
    const resultTitle = document.getElementById('resultTitle');
    const btn = document.getElementById('actionBtn');

    // التأكد من أن المستخدم كتب نصاً كافياً
    if (input.trim().length < 15) {
        alert("Your Excellency Redha, please enter more study material for a proper analysis.");
        return;
    }

    // تأثير التحميل
    btn.innerText = "REDHA'S NEURAL SCAN IN PROGRESS...";
    btn.disabled = true;
    resultBox.classList.add('hidden'); // إخفاء النتيجة القديمة إن وجدت

    // محاكاة وقت المعالجة للذكاء الاصطناعي
    setTimeout(() => {
        // إعادة الزر لشكله الطبيعي
        btn.innerText = "INITIATE NEURAL SCAN";
        btn.disabled = false;
        
        // إظهار صندوق النتيجة
        resultBox.classList.remove('hidden');

        // أخذ أول جزء من النص لجعله يبدو كتحليل حقيقي
        const firstWords = input.split(' ').slice(0, 8).join(' ');
        let response = "";

        // تحديد النتيجة بناءً على الزر المختار
        if (currentMode === 'summarize') {
            resultTitle.innerText = "✦ EXECUTIVE SUMMARY";
            response = `Based on your input regarding "${firstWords}...", Redha's Logic Engine has synthesized the following:\n\nThis material outlines a core academic framework. To achieve maximum retention, we recommend focusing on the foundational theories presented. The logical progression of these arguments is key to mastering the subject.`;
        
        } else if (currentMode === 'quiz') {
            resultTitle.innerText = "✦ KNOWLEDGE CHECK (QUIZ)";
            response = `Test your knowledge on the provided material:\n\n1. Based on your text, what is the core significance of "${firstWords}..."?\n2. Identify the primary argument or evidence presented in the text.\n3. How would you apply these specific concepts in a practical, real-world scenario?`;
        
        } else if (currentMode === 'simplify') {
            resultTitle.innerText = "✦ SIMPLIFIED EXPLANATION (ELI5)";
            response = `Let's break down "${firstWords}..." into simple terms:\n\nThink of this topic as the foundation of a building. Instead of looking at the whole complex skyscraper, just focus on this base layer first. Once you understand these basic building blocks, everything else you read will just be adding floors on top. Keep it simple!`;
        }

        // وضع النص في الصندوق والنزول إليه
        aiText.innerText = response;
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    }, 1500); // تأخير ثانية ونصف لمحاكاة التفكير
}

// دالة نسخ النص
function copyResult() {
    const text = document.getElementById('aiText').innerText;
    navigator.clipboard.writeText(text);
    alert("Insights successfully copied to clipboard! Verified by Redha Younes.");
}

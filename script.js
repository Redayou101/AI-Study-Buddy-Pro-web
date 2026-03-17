// --- Imperial AI Logic Engine ---

function runImperialAI() {
    const userInput = document.getElementById('userInput').value;
    const loader = document.getElementById('aiLoader');
    const resultBox = document.getElementById('resultBox');
    const summaryText = document.getElementById('summaryText');
    const processBtn = document.getElementById('processBtn');

    // 1. التحقق من النص
    if (userInput.trim().length < 100) {
        alert("Your Excellence, the text provided is too brief for an elite neural analysis. Please provide at least 100 characters.");
        return;
    }

    // 2. تفعيل حالة التحميل
    processBtn.disabled = true;
    processBtn.innerText = "Scanning Neural Pathways...";
    loader.classList.remove('hidden');
    resultBox.classList.add('hidden');

    // 3. محاكاة "تفكير" الذكاء الاصطناعي
    setTimeout(() => {
        loader.classList.add('hidden');
        resultBox.classList.remove('hidden');
        processBtn.disabled = false;
        processBtn.innerText = "Initiate Neural Scan";

        // تحليل منطقي بسيط: استخراج الجمل الأساسية التي تحتوي على كلمات دلالية
        const sentences = userInput.split(/[.!?]/).filter(s => s.trim().length > 15);
        const keywords = ['key', 'important', 'conclude', 'result', 'main', 'concept', 'أهم', 'نتيجة', 'خلاصة'];
        
        let extracted = sentences.filter(s => 
            keywords.some(k => s.toLowerCase().includes(k))
        );

        // إذا لم يجد جمل دلالية، يأخذ أول 3 جمل
        if (extracted.length < 2) {
            extracted = sentences.slice(0, 3);
        }

        const finalResult = extracted.join('. ') + ".";
        
        // حساب الإحصائيات
        const wordCount = userInput.split(' ').length;
        const timeSaved = Math.round(wordCount / 60); // نفترض توفير دقيقة لكل 60 كلمة قراءة

        document.getElementById('wordCount').innerText = wordCount;
        document.getElementById('timeSaved').innerText = timeSaved;

        // تأثير الكتابة (Typewriter effect)
        typeEffect(summaryText, finalResult);

    }, 2500); // تأخير ليعطي هيبة للعملية
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
    }, 20); // سرعة الكتابة
}

function copyResult() {
    const text = document.getElementById('summaryText').innerText;
    navigator.clipboard.writeText(text);
    alert("Insight copied to royal clipboard!");
}

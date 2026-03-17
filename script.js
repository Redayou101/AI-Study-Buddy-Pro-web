function processStudyText() {
    const text = document.getElementById('userInput').value;
    const loader = document.getElementById('loader');
    const resultSection = document.getElementById('resultSection');
    const summaryOutput = document.getElementById('summaryOutput');

    if (text.length < 20) {
        alert("يا بطل، النص قصير جداً! حط نص درس كامل عشان أبدع لك.");
        return;
    }

    // إظهار لودر المعالجة
    loader.classList.remove('hidden');
    resultSection.classList.add('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        resultSection.classList.remove('hidden');

        // محاكاة ذكاء اصطناعي بسيطة للتلخيص
        const words = text.split(' ');
        summaryOutput.innerHTML = `
            <ul>
                <li>📌 <b>الفكرة الرئيسية:</b> تحليل محتوى تعليمي مكثف.</li>
                <li>💡 <b>نقطة هامة:</b> تم استخراج المفاهيم الأساسية آلياً.</li>
                <li>✅ <b>الخلاصة:</b> المحتوى يتحدث عن ${words.slice(0, 3).join(' ')}...</li>
            </ul>
        `;
        
        document.getElementById('wordCount').innerText = `عدد الكلمات: ${words.length}`;
        document.getElementById('timeSaved').innerText = `الوقت الموفر: ${Math.round(words.length / 50)} دقيقة`;
    }, 1500);
}

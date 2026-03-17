function processAI() {
    const input = document.getElementById('userInput').value;
    const btn = document.getElementById('mainBtn');
    const responseArea = document.getElementById('aiResponse');
    const output = document.getElementById('typewriter');

    // التحقق من طول النص
    if (input.trim().length < 100) {
        alert("Wait! To provide a royal analysis, I need at least 100 characters. Quality requires content!");
        return;
    }

    // تأثير الانتظار
    btn.innerText = "Consulting Neural Pathways...";
    btn.disabled = true;

    setTimeout(() => {
        responseArea.classList.remove('hidden');
        btn.innerText = "Initiate Neural Analysis";
        btn.disabled = false;

        // منطق "تلخيص" وهمي ذكي
        const sentences = input.split(/[.!?]/).filter(s => s.length > 20);
        const resultText = `Analysis Complete. Based on your input, the core pillars of this material revolve around ${sentences[0].toLowerCase()}. In summary, we can determine that the primary objective is to clarify the relationship between the key concepts provided. As your AI companion, I recommend focusing on the foundational segments of this text for better mastery.`;

        // تأثير الكتابة
        typeWriter(output, resultText, 0);
        document.getElementById('knowledgeLevel').innerText = "98.4%";
        
        // التمرير للنتيجة
        responseArea.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

function typeWriter(element, text, i) {
    if (i === 0) element.innerHTML = "";
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 25);
    }
}

// عداد الكلمات
document.getElementById('userInput').addEventListener('input', function() {
    const count = this.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById('wordCounter').innerText = `${count} words`;
});

function copyResult() {
    const text = document.getElementById('typewriter').innerText;
    navigator.clipboard.writeText(text);
    alert("Copied to Royal Clipboard!");
}

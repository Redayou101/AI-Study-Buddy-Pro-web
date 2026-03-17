function startNeuralAnalysis() {
    const input = document.getElementById('studyInput').value;
    const btn = document.getElementById('analyzeBtn');
    const processing = document.getElementById('processing');
    const resultArea = document.getElementById('resultArea');
    const output = document.getElementById('aiSummary');

    if (input.trim().length < 50) {
        alert("Your Excellency, the content is too brief. Please provide a more substantial text for a royal analysis.");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = "Accessing Neural Pathways...";
    processing.classList.remove('hidden');
    resultArea.classList.add('hidden');

    setTimeout(() => {
        processing.classList.add('hidden');
        resultArea.classList.remove('hidden');
        btn.disabled = false;
        btn.innerHTML = "Initiate Neural Scan";

        const sentences = input.split(/[.!?]/).filter(s => s.trim().length > 10);
        const summary = generateSummary(sentences);
        
        const wordCount = input.split(' ').length;
        document.getElementById('savedTime').innerText = Math.round(wordCount / 65);

        typeWriter(output, summary);
        
    }, 2800);
}

function generateSummary(sentences) {
    const keyWords = ["important", "result", "lead", "because", "main", "core", "finally", "however"];
    let filtered = sentences.filter(s => keyWords.some(k => s.toLowerCase().includes(k)));
    
    if (filtered.length < 2) filtered = sentences.slice(0, 3);
    
    return "After a deep neural scan of your material, here is the executive summary:\n\n✦ " + 
           filtered.map(s => s.trim()).join(".\n\n✦ ") + ".";
}

function typeWriter(element, text) {
    element.innerHTML = "";
    let i = 0;
    const speed = 25;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

document.getElementById('studyInput').addEventListener('input', function() {
    const count = this.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById('wCount').innerText = count;
});

function copyToClipboard() {
    const text = document.getElementById('aiSummary').innerText;
    navigator.clipboard.writeText(text);
    alert("Royal insights copied to clipboard!");
}

function scrollToApp() {
    document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

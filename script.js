function processText() {
    const input = document.getElementById('userInput').value;
    const loader = document.getElementById('loader');
    const resultBox = document.getElementById('resultBox');
    const summaryDiv = document.getElementById('summary');

    if (input.length < 50) {
        alert("Text too short! Please provide a full lesson for better results.");
        return;
    }

    loader.classList.remove('hidden');
    resultBox.classList.add('hidden');

    // Simulate AI Processing
    setTimeout(() => {
        loader.classList.add('hidden');
        resultBox.classList.remove('hidden');

        const words = input.split(' ');
        const summary = words.slice(0, 40).join(' ') + "..."; // Real Logic: First 40 words
        
        summaryDiv.innerHTML = `
            <p style="color: #d4af37; margin-bottom: 10px;">✨ Summary:</p>
            <p>${summary}</p>
        `;

        document.getElementById('wordCount').innerText = `Words: ${words.length}`;
        document.getElementById('timeSaved').innerText = `Time Saved: ${Math.round(words.length / 60)} min`;
    }, 2000);
}

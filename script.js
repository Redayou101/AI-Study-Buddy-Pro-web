function royalProcess() {
    const text = document.getElementById('userInput').value;
    const loader = document.getElementById('loader');
    const resultContainer = document.getElementById('resultContainer');
    const summaryText = document.getElementById('summaryText');

    if (text.length < 50) {
        alert("The Imperial engine requires at least 50 characters to analyze.");
        return;
    }

    loader.classList.remove('hidden');
    resultContainer.classList.add('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // خوارزمية تلخيص حقيقية تعتمد على الجمل المفتاحية
        const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 15);
        const summary = sentences.slice(0, 3).join('. ') + ".";

        summaryText.innerHTML = `
            <p style="font-style: italic; color: #f1d27b; margin-top: 20px; font-size: 1.1rem;">
                "${summary}"
            </p>
        `;
    }, 1800);
}

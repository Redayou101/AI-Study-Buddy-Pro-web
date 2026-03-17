function royalProcess() {
    const text = document.getElementById('userInput').value;
    const loader = document.getElementById('loader');
    const resultBox = document.getElementById('resultBox');
    const output = document.getElementById('outputContent');

    if (text.length < 50) {
        alert("Your Majesty, the text is too brief for an imperial analysis.");
        return;
    }

    loader.classList.remove('hidden');
    resultBox.classList.add('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        resultBox.classList.remove('hidden');

        const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 10);
        const summary = sentences.slice(0, 3).join('. ') + ".";

        output.innerHTML = `<p style="line-height: 1.6; font-style: italic;">"${summary}"</p>`;
        document.getElementById('wCount').innerText = `Words Processed: ${text.split(' ').length}`;
        document.getElementById('tSaved').innerText = `Efficiency: High`;
    }, 2000);
}

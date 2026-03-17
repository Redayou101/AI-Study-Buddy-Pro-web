// Function to handle the Royal AI Processing
function royalProcess() {
    const textInput = document.getElementById('userInput').value;
    const loader = document.getElementById('loader');
    const resultContainer = document.getElementById('resultContainer');
    const summaryText = document.getElementById('summaryText');

    // 1. Validation: Ensure text is long enough
    if (textInput.trim().length < 50) {
        alert("The Imperial Engine requires a more substantial text to perform a royal analysis. (Minimum 50 characters)");
        return;
    }

    // 2. Visual Feedback: Show loader and hide previous results
    loader.classList.remove('hidden');
    resultContainer.classList.add('hidden');

    // 3. Simulate Neural Analysis (1.8 seconds delay for "Feel")
    setTimeout(() => {
        loader.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // Logic: Extracting meaningful sentences
        const sentences = textInput.split(/[.!?]/).filter(s => s.trim().length > 15);
        
        // Take the first 3 key sentences as a summary
        const summary = sentences.slice(0, 3).join('. ') + ".";

        // Display results with a premium touch
        summaryText.innerHTML = `
            <div class="summary-content">
                <p style="color: #f1d27b; font-size: 0.9rem; margin-bottom: 10px; letter-spacing: 1px;">GENERTATED INSIGHTS:</p>
                <p style="line-height: 1.8; font-style: italic;">"${summary}"</p>
                <div style="margin-top: 20px; border-top: 1px solid rgba(197, 160, 89, 0.2); padding-top: 15px; font-size: 0.8rem; color: #888;">
                    Analysis Complete | ${textInput.split(' ').length} words processed.
                </div>
            </div>
        `;

        // Smooth scroll to results
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    }, 1800);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to initiate the Elite AI Analysis
function initiateEliteAnalysis() {
    const userInput = document.getElementById('userInput');
    const loader = document.getElementById('loader');
    const resultContainer = document.getElementById('resultContainer');
    const summaryOutput = document.getElementById('summaryOutput');
    const wordCountMetric = document.getElementById('wordCountMetric');
    const timeSavedMetric = document.getElementById('timeSavedMetric');

    const text = userInput.value.trim(); // Get and trim the input text

    // 1. Input Validation: Ensure text is substantial enough
    if (text.length < 100) {
        alert("For an elite analysis, please provide at least 100 characters of academic content.");
        userInput.focus(); // Focus on the input field for user convenience
        return;
    }

    // 2. UI Feedback: Show loader, hide previous results
    loader.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    
    // Simulate complex AI processing delay
    setTimeout(() => {
        // Hide loader
        loader.classList.add('hidden');
        
        // 3. AI Logic Simulation: Advanced Summarization
        const sentences = text.split(/[.!?\n]/).filter(s => s.trim().length > 30); // Filter out very short sentences
        
        // Prioritize sentences with keywords (simple simulation)
        const keywords = ['key', 'important', 'core', 'principle', 'concept', 'main', 'conclusion', 'result'];
        let prioritizedSentences = sentences.filter(s => keywords.some(k => s.toLowerCase().includes(k)));
        
        // If not enough prioritized sentences, take general ones
        if (prioritizedSentences.length < 3) {
            prioritizedSentences = sentences;
        }

        // Take the top 3-5 most relevant sentences for the summary
        const finalSummary = prioritizedSentences.slice(0, 5).map(s => s.trim()).join('. ') + ".";

        // Calculate metrics
        const totalWords = text.split(/\s+/).filter(word => word.length > 0).length; // Count actual words
        const estimatedReadingTime = Math.ceil(totalWords / 200); // Average reading speed 200 words/min
        const summaryWords = finalSummary.split(/\s+/).filter(word => word.length > 0).length;
        const summaryReadingTime = Math.ceil(summaryWords / 200);
        const timeSaved = Math.max(0, estimatedReadingTime - summaryReadingTime);

        // 4. Display Results
        summaryOutput.innerHTML = finalSummary;
        wordCountMetric.textContent = `Original Words: ${totalWords}`;
        timeSavedMetric.textContent = `Time Saved: ${timeSaved} min`;
        
        resultContainer.classList.remove('hidden');

        // Smooth scroll to the results section for better UX
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

    }, 2500); // Increased delay for more realistic AI processing feel
}

// Smooth Scrolling for Navigation Links (Improved for all anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the top of the target section
        });
    });
});

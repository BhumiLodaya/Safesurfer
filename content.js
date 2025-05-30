// content.js

// Function to analyze the page for potential threats
function analyzePage() {
  let threats = [];
  let score = 0;

  // Check for suspicious function usage
  const suspiciousFunctions = ['eval', 'Function', 'setTimeout', 'setInterval'];
  suspiciousFunctions.forEach(func => {
      if (new RegExp(`\\b${func}\\b`).test(document.body.innerHTML)) {
          threats.push(`Suspicious function usage: ${func}`);
          score += 1; // Increment score for each suspicious function found
      }
  });

  // Example of checking for known malware patterns (this is a placeholder)
  const knownMalwarePatterns = ['malicious', 'virus', 'trojan'];
  knownMalwarePatterns.forEach(pattern => {
      if (new RegExp(pattern, 'i').test(document.body.innerHTML)) {
          threats.push(`Known malware pattern detected: ${pattern}`);
          score += 2; // Higher score for known malware patterns
      }
  });

  // Return the results
  return {
      threats: threats,
      score: score
  };
}

// Run the analysis and store the results
const results = analyzePage();
chrome.storage.local.get('threatLogs', (data) => {
  const threatLogs = data.threatLogs || [];
  threatLogs.push({
      url: window.location.href,
      threats: results.threats,
      score: results.score
  });
  chrome.storage.local.set({ threatLogs: threatLogs });
});
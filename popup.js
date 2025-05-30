document.addEventListener('DOMContentLoaded', () => {
  const resultsDiv = document.getElementById('results');
  const clearLogsButton = document.getElementById('clearLogs');

  // Function to display threat logs
  function displayThreatLogs(threatLogs) {
      resultsDiv.innerHTML = ''; // Clear previous results
      if (threatLogs.length === 0) {
          resultsDiv.innerHTML = '<p>No threats detected.</p>';
          return;
      }

      threatLogs.forEach(log => {
          const logDiv = document.createElement('div');
          logDiv.className = 'threat';
          logDiv.innerHTML = `<strong>URL:</strong> ${log.url}<br>
                             <strong>Threats:</strong> ${log.threats.join(', ')}<br>
                             <strong>Score:</strong> ${log.score}`;
          resultsDiv.appendChild(logDiv);
      });
  }

  // Load and display threat logs
  chrome.storage.local.get('threatLogs', (data) => {
      displayThreatLogs(data.threatLogs);
  });

  // Clear logs button functionality
  clearLogsButton.addEventListener('click', () => {
      chrome.storage.local.set({ threatLogs: [] }, () => {
          resultsDiv.innerHTML = '<p>Logs cleared.</p>';
      });
  });
});
Add files via upload
SafeSurfer is a lightweight Chrome extension designed to enhance online safety by performing real-time analysis of web pages to detect phishing attempts, hidden malware, suspicious scripts, and unsafe file downloads.
It uses a behavior-based heuristic model with a custom scoring system to evaluate website threats and notify users through an intuitive popup interface.
🚀 Features:
🔍 Real-Time Threat Detection – Scans DOM for hidden iframes, suspicious links, and obfuscated JavaScript functions (eval(), Function(), etc.).

⚠️ Threat Scoring System – Assigns a risk score and classifies sites as Safe, Suspicious, or Dangerous.

🧠 Heuristic-Based Detection – No reliance on large databases or blacklists.

🧾 Threat Logging – Displays scan history with an option to clear logs.

🧩 Modular Architecture – Includes background service worker, content script, popup UI, and scoring logic.

💡 Offline and Lightweight – All scans are performed locally to protect user privacy and minimize performance impact.

import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from this origin
}));
app.use(express.json()); // Use built-in middleware for parsing JSON body

// Mock threat data (replace with actual database integration)
let threatData = [
  { id: 1, type: 'Malware', description: 'Malware attack detected.', severity: 'High', date: '2024-06-21' },
  { id: 2, type: 'Phishing', description: 'Phishing attempt detected.', severity: 'Medium', date: '2024-06-20' },
  { id: 3, type: 'Denial of Service (DoS)', description: 'DoS attack on web servers.', severity: 'High', date: '2024-06-19' },
  { id: 4, type: 'Ransomware', description: 'Ransomware infection on corporate network.', severity: 'Critical', date: '2024-06-18' },
  { id: 5, type: 'Insider Threat', description: 'Unauthorized data access by a disgruntled employee.', severity: 'Medium', date: '2024-06-17' },
  { id: 6, type: 'SQL Injection', description: 'SQL injection attempt detected in web application.', severity: 'High', date: '2024-06-16' },
  { id: 7, type: 'Brute Force Attack', description: 'Brute force attack against SSH server.', severity: 'Medium', date: '2024-06-15' },
  { id: 8, type: 'Cross-Site Scripting (XSS)', description: 'XSS attack on user input fields.', severity: 'Low', date: '2024-06-14' },
  { id: 9, type: 'Credential Stuffing', description: 'Credential stuffing attack on login page.', severity: 'Medium', date: '2024-06-13' },
  { id: 10, type: 'Data Exfiltration', description: 'Attempted data exfiltration via unauthorized application access.', severity: 'High', date: '2024-06-12' },
];

// Routes
app.get('/api/threats', (req, res) => {
  res.json(threatData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

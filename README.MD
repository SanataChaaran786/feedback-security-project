# Feedback Form Security Assessment

This project was created as part of a cybersecurity internship to test and improve the security of a Node.js web application.

 📆 Weekly Breakdown

 ✅ Week 1: Vulnerability Testing
- Set up a mock feedback web app
- Tested Cross-Site Scripting (XSS)
- Inspected request/response headers
- Documented vulnerabilities

 ✅ Week 2: Fixes Implemented
- Added Helmet for HTTP security headers
- Used `validator.escape()` to prevent XSS
- Verified input is displayed as safe text

 ✅ Week 3: Logging & Monitoring
- Integrated Winston for logging
- Logged all feedback messages
- Flagged suspicious inputs
- Created `security.log` file

 📸 Screenshots

All test proofs are in the `/screenshots` folder.

 📋 Security Checklist

See `checklist.txt` for the list of improvements made during the internship.

const logger = require('./logger');
const express = require('express');
const validator = require('validator');
const helmet = require('helmet');

const app = express(); // 

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.get('/feedback', (req, res) => {
  res.send(`
    <h2>Leave Feedback</h2>
    <form method="POST" action="/feedback">
      <input type="text" name="message" placeholder="Type your message" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/feedback', (req, res) => {
  let rawInput = req.body.message;
  let feedback;

  if (validator.isEmpty(rawInput)) {
    feedback = "No feedback submitted.";
  } else {
    feedback = validator.escape(rawInput);
  }

  // 🟢 Logging
  logger.info(`Feedback submitted: ${feedback}`);

  // 🔐 Suspicious input detection (match original, unescaped input)
  if (rawInput.includes('<script>')) {
    logger.warn('⚠️ Suspicious input detected (XSS attempt)');
  }

  res.send(`
    <h2>Feedback Received</h2>
    <div>${feedback}</div>
    <br>
    <a href="/feedback">Return</a>
  `);
});
app.listen(3000, () => {
  console.log('App running @ http://localhost:3000');
});

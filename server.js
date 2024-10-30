// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser.json()); // Додаємо body-parser для парсингу JSON

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Обробник POST-запиту для отримання токена
app.post('/token', (req, res) => {
  const { id_token } = req.body;
  console.log("Received id_token on server:", id_token);

  // Можна повернути підтвердження клієнту
  res.json({ message: 'Token received', id_token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
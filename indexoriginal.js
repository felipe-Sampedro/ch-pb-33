const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

// Routes
app.get('/tarea1', (req, res) => {
  res.send('<h1>Tarea 1</h1>');
})

app.get('/tarea2', (req, res) => {
  res.send('<h2>Tarea 2</h2>');
})

app.listen(PORT, () => {
  console.log("Ready on port => ", PORT);
})

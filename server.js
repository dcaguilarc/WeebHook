const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importa CORS

const app = express();
const port = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para analizar los cuerpos JSON
app.use(bodyParser.json());

// Ruta que recibe el WebHook
app.post('/webhook', (req, res) => {
    console.log('WebHook recibido:', req.body);
    res.status(200).send('WebHook recibido correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

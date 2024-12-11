const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000;

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta básica de "Hola Mundo"
app.get('/hello', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

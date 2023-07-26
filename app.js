const express = require('express');
const path = require('path');
const app = express();

// Rutas de API u otras rutas de Express aquí si las necesitas

// Servir la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para todas las demás solicitudes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});

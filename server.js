const express = require('express');
const app = express();
app.use(express.json()); // <-- Esto está perfecto

// --- INICIO: IMPORTAR TODAS LAS RUTAS ---
const productosRoutes = require('./routes/productosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');
const carritosRoutes = require('./routes/carritosRoutes');
// --- FIN: IMPORTAR TODAS LAS RUTAS ---

// --- INICIO: USAR TODAS LAS RUTAS ---
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/carritos', carritosRoutes);
// --- FIN: USAR TODAS LAS RUTAS ---

//Mejora solicitada, guardar en un log de json todas las llamadas a la API
// (Aquí iría esa lógica si la implementas)

const port = 3000;
app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`));
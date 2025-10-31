const carritosRoutes = require('express').Router();
const { getCarritos, createCarrito, deleteCarrito, addProductoToCarrito, removeProductoFromCarrito, getProductosFromCarrito } = require('../controllers/carritosController');

carritosRoutes.get('/', getCarritos);
carritosRoutes.post('/', createCarrito);
carritosRoutes.delete('/:id', deleteCarrito);
carritosRoutes.post('/:id/productos', addProductoToCarrito);
carritosRoutes.delete('/:id/productos/:productoId', removeProductoFromCarrito);
carritosRoutes.get('/:id/productos', getProductosFromCarrito);

module.exports = carritosRoutes;

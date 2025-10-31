const proveedoresRoutes = require('express').Router();
const { getProveedores, createProveedor, updateProveedor, deleteProveedor } = require('../controllers/proveedoresController');
proveedoresRoutes.get('/', getProveedores);
proveedoresRoutes.post('/', createProveedor);
proveedoresRoutes.put('/:id', updateProveedor);
proveedoresRoutes.delete('/:id', deleteProveedor);
module.exports = proveedoresRoutes;

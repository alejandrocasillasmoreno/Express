const clientesController = require('../services/clientesService');
//Obtener todos
exports.obtenerTodos = (req, res) => {
    const clientes = clientesService.listar();
    res.json(clientes);
}
//Obtener por ID
exports.obtenerPorId = (req, res) => {
    const cliente = clientesService.buscarPorId(parseInt(req.params.id));
    cliente ? res.json(clientes) : res.status(404).json({mensaje: 'No encontrado'});
}
//Crear
exports.crear = (req, res) => {
    const nuevo = clientesService.crear(req.body);
    res.status()
}
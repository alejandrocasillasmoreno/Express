const categoriasService = require('../services/categoriasService');

exports.obtenerTodos = (req, res) => {
    try {
        const categorias = categoriasService.listar();
        res.json({
            success: true,
            count: categorias.length,
            data: categorias
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: 'Error al obtener categorías' 
        });
    }
};

exports.obtenerPorId = (req, res) => {
    try {
        const categoria = categoriasService.buscarPorId(parseInt(req.params.id));
        if (categoria) {
            res.json({
                success: true,
                data: categoria
            });
        } else {
            res.status(404).json({ 
                success: false,
                error: 'Categoría no encontrada' 
            });
        }
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: 'Error al buscar categoría' 
        });
    }
};

exports.crear = (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ 
                success: false,
                error: 'El nombre es obligatorio' 
            });
        }
        
        const nuevo = categoriasService.crear(req.body);
        res.status(201).json({
            success: true,
            message: 'Categoría creada exitosamente',
            data: nuevo
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: 'Error al crear categoría' 
        });
    }
};

exports.actualizar = (req, res) => {
    try {
        const actualizado = categoriasService.actualizar(parseInt(req.params.id), req.body);
        if (actualizado) {
            res.json({
                success: true,
                message: 'Categoría actualizada exitosamente',
                data: actualizado
            });
        } else {
            res.status(404).json({ 
                success: false,
                error: 'Categoría no encontrada' 
            });
        }
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: 'Error al actualizar categoría' 
        });
    }
};

exports.eliminar = (req, res) => {
    try {
        const eliminado = categoriasService.eliminar(parseInt(req.params.id));
        if (eliminado) {
            res.json({
                success: true,
                message: 'Categoría eliminada exitosamente',
                data: eliminado
            });
        } else {
            res.status(404).json({ 
                success: false,
                error: 'Categoría no encontrada' 
            });
        }
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: 'Error al eliminar categoría' 
        });
    }
};
const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, '../data/categorias.json');

function leer() {
    try {
        if (!fs.existsSync(ruta)) {
            // Crear archivo con datos de ejemplo si no existe
            const datosIniciales = [
                { id: 1, nombre: "Periféricos" },
                { id: 2, nombre: "Componentes" },
                { id: 3, nombre: "Software" }
            ];
            guardar(datosIniciales);
            return datosIniciales;
        }
        const data = fs.readFileSync(ruta, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error leyendo archivo:', error);
        return [];
    }
}

function guardar(datos) {
    try {
        const dir = path.dirname(ruta);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(ruta, JSON.stringify(datos, null, 2));
    } catch (error) {
        console.error('Error guardando archivo:', error);
        throw new Error('Error al guardar datos');
    }
}

exports.listar = () => {
    return leer();
};

exports.buscarPorId = (id) => {
    const datos = leer();
    return datos.find(c => c.id === id);
};

exports.crear = (nuevo) => {
    const datos = leer();
    nuevo.id = datos.length > 0 ? Math.max(...datos.map(c => c.id)) + 1 : 1;
    datos.push(nuevo);
    guardar(datos);
    return nuevo;
};

exports.actualizar = (id, cambios) => {
    const datos = leer();
    const index = datos.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    datos[index] = { ...datos[index], ...cambios, id: id };
    guardar(datos);
    return datos[index];
};

exports.eliminar = (id) => {
    const datos = leer();
    const index = datos.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    const eliminado = datos.splice(index, 1)[0];
    guardar(datos);
    return eliminado;
};
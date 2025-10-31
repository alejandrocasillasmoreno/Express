const carritosService = {
  getAllCarritos: async (db) => {
    const carritos = await db.collection('carritos').find().toArray();
    return carritos;
  },
  getCarritoById: async (db, id) => {
    const carrito = await db.collection('carritos').findOne({ _id: id });
    return carrito;
  },
  createCarrito: async (db, carritoData) => {
    const result = await db.collection('carritos').insertOne(carritoData);
    return result.insertedId;
  },
  updateCarrito: async (db, id, carritoData) => {
    await db.collection('carritos').updateOne({ _id: id }, { $set: carritoData });
  },
  deleteCarrito: async (db, id) => {
    await db.collection('carritos').deleteOne({ _id: id });
  }
};

module.exports = carritosService;

import { busquedasModel } from "../models/busquedaModel.js";

class daoBusqueda {

    async getAll() {
        const busquedas = busquedasModel.find();
        return busquedas;
    }

    async addBusqueda(busqueda) {
        const busquedaSchema = await busquedasModel.create(busqueda);

        return {
            nombre: busquedaSchema.nombre,
            descripcion: busquedaSchema.descripcion
        }
    }
}

export default daoBusqueda;
import { busquedasModel } from "../models/busquedaModel.js";

class daoBusqueda {

    async getAll() {
        const busquedas = busquedasModel.find();
        return busquedas;
    }

    async addBusqueda(busqueda) {
        busquedasModel.create(busqueda);
    }
}

export default daoBusqueda;
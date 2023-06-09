import daoBusqueda from "../daos/daoBusqueda.js";

class BusquedaManager {

    constructor() {
        this.dao = new daoBusqueda();
    }

    async getAll() {
        const busquedas = await this.dao.getAll();
        return busquedas
    }

    async addBusqueda(busqueda) {
        const newBusqueda = await this.dao.addBusqueda(busqueda);
        return newBusqueda;
    }
}

export default BusquedaManager;
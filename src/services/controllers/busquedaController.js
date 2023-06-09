import BusquedaManager from "../managers/busquedaManager.js";

const manager = new BusquedaManager();

export const getAll = async (req, res) => {

    const busquedas = await manager.getAll();

    res.status(200).json({ status: "success", payload: busquedas });
}

export const create = async (req, res) => {

    const busqueda = req.body;

    await manager.addBusqueda(busqueda);

    res.status(200).json({ status: "success", payload: busqueda });

}
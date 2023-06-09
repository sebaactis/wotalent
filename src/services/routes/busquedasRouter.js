import { Router } from 'express';
import { create, getAll } from '../controllers/busquedaController.js';

const busquedas = Router();

busquedas.get('/', getAll)
busquedas.post('/', create)

export default busquedas;

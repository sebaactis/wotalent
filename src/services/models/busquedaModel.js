import mongoose, { Schema } from 'mongoose';


const busquedasCollection = 'busquedas';

const busquedasSchema = new Schema({
    nombre: { type: Schema.Types.String },
    descripcion: { type: Schema.Types.String },
    codigo: { type: Schema.Types.String }
})

export const busquedasModel = mongoose.model(busquedasCollection, busquedasSchema);


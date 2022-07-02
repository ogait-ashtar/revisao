const mongoose = require("mongoose"); //puxa o mongoose

const PaletaSchema = new mongoose.Schema({
  sabor: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  valor: { type: Number, required: true },
}); //modelo de json

const Paleta = mongoose.model("Paleta", PaletaSchema, "paletas"); //nome da model o schema e a collection na variavel Paleta q vai chamar no service

module.exports = Paleta;

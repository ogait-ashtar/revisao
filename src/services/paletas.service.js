const Paleta = require("../models/Paleta");

const findAllPaletas = async () => {
  const allPaletas = await Paleta.find(); //puxa td q esta no banco e retorna
  return allPaletas;
};

const findByIdPaleta = async (idParam) => {
  const paleta = await Paleta.findById(idParam); //puxa o id no banco e retorna a paleta
  return paleta;
};

const createPaleta = async (newPaleta) => await Paleta.create(newPaleta); //outro tipo de escrita

const updatePaleta = async (idParam, editPaleta) =>
  await Paleta.findByIdAndUpdate(idParam, editPaleta).setOptions({
    returnOriginal: false,
  });

const deletePaleta = async (idParam) => await Paleta.findByIdAndDelete(idParam);

module.exports = {
  findAllPaletas,
  findByIdPaleta,
  createPaleta,
  updatePaleta,
  deletePaleta,
};

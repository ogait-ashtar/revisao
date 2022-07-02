const paletasService = require("../services/paletas.service");
const mongoose = require("mongoose");

const findAllPaletas = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletas();
  if (allPaletas.length == 0) {
    return res
      .status(206)
      .send({ message: "Não existe nenhuma paleta cadastrada" }); //p return para o cod e da a msg.
  }
  res.send(allPaletas);
};

const findById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id inválido" });
  }

  const paleta = await paletasService.findAllPaletas(id);

  if (!paleta) {
    return res.status(204);
  }

  res.send(paleta);
};

const createPaleta = async (req, res) => {
  const paleta = req.body;

  if (
    !newPaleta ||
    !newPaleta.sabor ||
    !newPaleta.descricao ||
    !newPaleta.foto ||
    !newPaleta.preco
  ) {
    return res.status(400).send({
      message:
        "Você não preencheu todos os dados para adicionar uma nova paleta",
    });
  }

  const newPaleta = await paletasService.createPaleta(paleta);
  res.status(201).send(newPaleta);
};

const updatePaleta = async (req, res) => {
  const id = req.params.id;
  const editPaleta = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id inválido" });
  }

  const paleta = await paletasService.findByIdPaleta(id);


  if (
    !newPaleta ||
    !newPaleta.sabor ||
    !newPaleta.descricao ||
    !newPaleta.foto ||
    !newPaleta.preco
  ) {
    return res.status(400).send({
      message:
        "Você não preencheu todos os dados para adicionar uma nova paleta",
    });
  }

  const updatePaleta = await paletasService.updatePaleta(id, editPaleta);
  res.send(updatePaleta);
};

const deletePaleta = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id inválido" });
  }

  const paleta = await paletasService.findByIdPaleta(id);

  if (!paleta) {
    return res.status(204);
  }

  await paletasService.deletePaleta(id);
  res.send({ message: "Paleta deletada" });
};

module.exports = {
  findAllPaletas,
  findById,
  createPaleta,
  updatePaleta,
  deletePaleta,
};

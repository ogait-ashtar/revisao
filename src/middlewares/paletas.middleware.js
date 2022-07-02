const mongoose = require("mongoose");
const validId = async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id inválido" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
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
  next();
};

module.exports = {
  validId,
};

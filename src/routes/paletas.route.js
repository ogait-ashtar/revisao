const express = require("express");
const router = express.Router();

const paletasController = require("../controllers/paletas.controller");

router.get("/", paletasController.findAllPaletas);
router.get("/:id", paletasController.findById);
router.post("/", paletasController.createPaleta);
router.put("/:id", paletasController.updatePaleta);
router.delete("/:id", paletasController.deletePaleta);

module.exports = router;

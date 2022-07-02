const express = require("express");
const router = express.Router();
const { validId } = require("../middlewares/paletas.middleware");

const paletasController = require("../controllers/paletas.controller");
const { isValidObjectId } = require("mongoose");

router.get("/", paletasController.findAllPaletas);
router.get("/:id", validId, paletasController.findById);
router.post("/", isValidObjectId, paletasController.createPaleta);
router.put("/:id", validId, isValidObjectId, paletasController.updatePaleta);
router.delete("/:id", validId, paletasController.deletePaleta);

module.exports = router;

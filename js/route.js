const express = require("express");
const router = express.Router();
// Importamos los controllers necesarios
const controller = require("../js/controller");

router.get("/", controller.getUsers);

router.get("/:id", controller.getUserById);

router.post("/", controller.createUser);

router.put("/:id", controller.updateUser);

router.delete("/:id", controller.deleteUser);

module.exports = peopleRouter;

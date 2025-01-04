const express = require("express");
const router = express.Router();
const roomController = require("../controllers/classroom.controller");


router.get("/", roomController.getAllRooms);// GET all rooms
router.post("/", roomController.createRoom);// POST create a new room
router.put("/:id", roomController.updateRoom);// PUT update an existing room
router.delete("/:id", roomController.deleteRoom);// DELETE delete a room

module.exports = router;

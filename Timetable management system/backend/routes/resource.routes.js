const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resource.controller");


router.get("/", resourceController.getAllResources);// GET all resources
router.post("/", resourceController.createResource);// POST create a new resource
router.put("/:id", resourceController.updateResource);// PUT update an existing resource
router.delete("/:id", resourceController.deleteResource);// DELETE delete a resource

module.exports = router;

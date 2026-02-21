const express = require("express");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controller/projectController");
const verifyAdmin = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getProjects);
router.post("/", verifyAdmin, createProject);
router.put("/:id", verifyAdmin, updateProject);
router.delete("/:id",verifyAdmin, deleteProject);
module.exports = router;

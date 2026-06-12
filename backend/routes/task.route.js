const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware.js");

const roleMiddleware = require("../middleware/role.middleware.js");

const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controllers/task.controllers.js");

// create Task
router.post("/", authMiddleware, createTask);

// get Tasks
router.get("/", authMiddleware, getTasks);

// update Task
router.put("/:id", authMiddleware, updateTask);

// delete Task
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteTask
);

module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Student Task Manager API is running" });
});

// Check server and database
app.get("/api/health", (req, res) => {
  res.json({
    server: "running",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected"
  });
});

// Get all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch tasks" });
  }
});

// Add a task
app.post("/api/tasks", async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "Task title is required"
      });
    }

    const task = await Task.create({
      title: title.trim(),
      description: description || "",
      deadline: deadline || null
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Could not create task" });
  }
});

// Mark a task as completed or incomplete

 // Update a task's details or completion status
app.patch("/api/tasks/:id", async (req, res) => {
  try {
    const updates = {};
    const { title, description, deadline, completed } = req.body;

    if ("title" in req.body) {
      if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
          message: "Task title is required"
        });
      }
      updates.title = title.trim();
    }

    if ("description" in req.body) {
      if (typeof description !== "string") {
        return res.status(400).json({
          message: "Description must be text"
        });
      }
      updates.description = description.trim();
    }

    if ("deadline" in req.body) {
      if (deadline === "" || deadline === null) {
        updates.deadline = null;
      } else {
        const parsedDeadline = new Date(deadline);

        if (Number.isNaN(parsedDeadline.getTime())) {
          return res.status(400).json({
            message: "Invalid deadline"
          });
        }

        updates.deadline = parsedDeadline;
      }
    }

    if ("completed" in req.body) {
      if (typeof completed !== "boolean") {
        return res.status(400).json({
          message: "Completed must be true or false"
        });
      }
      updates.completed = completed;
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        message: "No valid fields provided"
      });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({
      message: "Invalid task ID or update"
    });
  }
});


// Delete a task
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid task ID" });
  }
});

// Start server
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
}

startServer();

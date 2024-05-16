const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

require("./db");

// Controllers
const achievementsController = require("./controllers/achievementsController");
const activitiesController = require("./controllers/activitiesController");
const usersController = require("./controllers/usersController");

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/user", usersController.getAllUsers);
app.post("/user", usersController.createUser);
app.delete("/user/:id", usersController.deleteUser);
app.put("/user/:id", usersController.updateUser);

app.post("/login", usersController.loginUser);
app.post("/register", usersController.registerUser);

app.get("/achievements", achievementsController.getAllAchievements);
app.post("/achievements", achievementsController.createAchievement);
app.delete("/achievements/:id", achievementsController.deleteAchievement);
app.put("/achievements/:id", achievementsController.updateAchievement);

app.get("/activities", activitiesController.getActivity);
app.get("/activities/:id", activitiesController.getActivityById);
app.post("/activities", activitiesController.createActivity);
app.delete("/activities/:id", activitiesController.deleteActivity);
app.put("/activities/:id", activitiesController.updateActivity);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found", message: "Route not found" });
});

// Global error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Internal Server Error", message: err.message });
});

// Start server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

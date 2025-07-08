const express = require("express");
const connectDb = require("./config/database");
const bookRouter = require("./routes/book-router");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const PORT = process.env.PORT || 7777;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/book", bookRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 route handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

connectDb()
  .then(() => {
    console.log("Database connection established...");
    app.listen(PORT, () => {
      console.log("Server is successfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("Couldn't connect to the Database !!");
  });

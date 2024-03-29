const express = require("express");
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// ROUTE
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`));

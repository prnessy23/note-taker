const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");

// parse urlencoded and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//  use these api routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT,
  function() {
    console.log(`Api server now on port http://localhost:${PORT}`);
  });

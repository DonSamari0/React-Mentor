const express = require("express");
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
//Middlewares
app.use(express.json());
//Routes
app.use("/api/mentor", require("../routes/mentor.routes"));
//Launcher
app.listen(app.get("port"), () => {
  console.log(`Server ready on port ${app.get("port")}`);
});

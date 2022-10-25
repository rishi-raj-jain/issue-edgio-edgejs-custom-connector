const express = require("express");

module.exports = async (port) => {
  // The following code is the one causing the problem
  // but this ends up crashing the whole edgejs and 
  // every request goes to renderWithApp()
  process.chdir('../')
  const app = express();
  app.get("/:path*", (req, res) => {
    res.send("Hello World!");
  });
  app.listen(port, () => {
    console.log(`express app listening on port: ${port}`);
  });
};

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.listen("/", (req, res) => {
  return res.json({
    message: "Hey, I am nodejs in Container",
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

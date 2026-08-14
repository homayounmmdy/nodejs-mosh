const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.customerId)
    return res.status(400).send("customerId not provided");
  if (!req.body.movieId)
    return res.status(400).send("movieId not provided");

  res.status(401).send("Unauthorized");
});

module.exports = router;

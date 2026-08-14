const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.customerId)
    return res.status(400).send("customerId not provided");
  if (!req.body.movieId) return res.status(400).send("movieId not provided");

  const rental = await Rental.findOne({
    "customer._id": req.body.customerId,
    "movie._id": req.body.movieId,
  });
  if (!result) return res.status(404).send("Rental not found.");

  if (rental.dateReturned)
    return res.status(400).send("Return already processed.");
  
  res.status(401).send("Unauthorized");
});

module.exports = router;

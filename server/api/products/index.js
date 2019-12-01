const express = require("express");
const router = express.Router();
require("passport");

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send({ message: "You have not been authenticated" });
  }
}

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in products." });
});

// read
router.get("/:id", (req, res) => {
  return req.db.Product.where({ id: req.params.id })
    .fetch({
      withRelated: ["user", "conditions"]
    })
    .then(results => {
      if (results.toJSON().length === 0) {
        throw new Error("Page not found!");
      } else {
        res.json(results);
      }
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

// create
router.post("/", isAuthenticated, (req, res) => {
  return req.db.Product.forge(req.body)
    .save()
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

// update
router.put("/:id", (req, res) => {
  let pid = req.params.id;
  if (isNaN(parseFloat(pid)) || !isFinite(pid) || pid.includes(".")) {
    return res.status(500).json({ message: "ID is not an integer" });
  }
  req.db.Product.where({ id: req.params.id })
    .save(req.body, { patch: true })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// delete

module.exports = router;

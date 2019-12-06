const express = require("express");
const router = express.Router();

// read
router.get("/:id", (req, res) => {
  let pid = req.params.id;
  if (isNaN(parseFloat(pid)) || !isFinite(pid) || pid.includes(".")) {
    return res.status(500).json({ message: "ID is not an integer" });
  }
  return req.db.User.where({ id: req.params.id })
    .fetch({
      withRelated: ["products", "conditions"]
    })
    .then(results => {
      if (results.toJSON().length === 0) {
        throw new Error("Page not found!");
      } else {
        console.log(results);
        res.json(results);
      }
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

// create
router.post("/", (req, res) => {
  return req.db.User.forge(req.body)
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
  req.db.User.where({ id: req.params.id })
    .save(req.body, { patch: true })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// delete
router.delete("/:id", (req, res) => {
  let pid = req.params.id;
  if (isNaN(parseFloat(pid)) || !isFinite(pid) || pid.includes(".")) {
    return res.status(500).json({ message: "ID is not an integer" });
  }
  return req.db.User.forge({ id: req.params.id })
    .fetch()
    .then(results => {
      results.destroy();
      res.json({ message: "User successfully deleted" });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

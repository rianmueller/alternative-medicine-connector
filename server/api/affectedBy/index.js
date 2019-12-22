const express = require("express");
const router = express.Router();

// read
router.get("/:id", (req, res) => {
  let pid = req.params.id;
  if (isNaN(parseFloat(pid)) || !isFinite(pid) || pid.includes(".")) {
    return res.status(500).json({ message: "ID is not an integer" });
  }
  return req.db.AffectedBy.where({ id: req.params.id })
    .fetch({
      withRelated: ["user", "condition"]
    })
    .then(results => {
      if (results.toJSON().length === 0) {
        throw new Error("User not found!");
      } else {
        res.json(results);
      }
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

// read all
router.get("/", (req, res) => {
  return req.db.AffectedBy.fetchAll({ withRelated: ["user", "condition"] })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

// create
router.post("/", (req, res) => {
  return req.db.AffectedBy.forge(req.body)
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
  req.db.AffectedBy.where({ id: req.params.id })
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
  return req.db.AffectedBy.forge({ id: req.params.id })
    .fetch()
    .then(results => {
      results.destroy();
      res.json({ message: "Affectation successfully deleted" });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();

// read
router.get("/:id", (req, res) => {
  let pid = req.params.id;
  if (isNaN(parseFloat(pid)) || !isFinite(pid) || pid.includes(".")) {
    return res.status(500).json({ message: "ID is not an integer" });
  }
  req.db.Product.where({ id: req.params.id })
    .fetch({
      withRelated: ["user", "conditions"]
    })
    .then(results => {
      if (results.toJSON().length === 0) {
        throw new Error("Page not found!");
      }
      if (results.attributes.type === 'Indica') {
        results.attributes.img = "https://medical-marijuana-app.s3-us-west-2.amazonaws.com/Screen+Shot+2019-12-26+at+5.28.36+PM.png"
      } else if (results.attributes.type == 'Hybrid'){
        results.attributes.img = 'https://medical-marijuana-app.s3-us-west-2.amazonaws.com/Screen+Shot+2019-12-26+at+5.29.07+PM.png'
      } else if (results.attributes.type == 'Sativa'){
        results.attributes.img = 'https://medical-marijuana-app.s3-us-west-2.amazonaws.com/Screen+Shot+2019-12-26+at+5.29.22+PM.png'
      }
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

// read all
router.get("/", (req, res) => {
  return req.db.Product.fetchAll({ withRelated: ["user", "conditions"] })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      return res.json(err);
    });
});

// create
router.post("/", (req, res) => {
  return req.db.Product.forge(req.body)
    .save()
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
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
router.delete("/:id", (req, res) => {
  let pid = req.params.id;
  if (isNaN(parseFloat(pid)) || !isFinite(pid) || pid.includes(".")) {
    return res.status(500).json({ message: "ID is not an integer" });
  }
  return req.db.Product.forge({ id: req.params.id })
    .fetch()
    .then(results => {
      results.destroy();
      res.json({ message: "Product successfully deleted" });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

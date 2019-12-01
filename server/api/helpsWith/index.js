const express = require("express");
const router = express.Router();

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in helpsWith." });
});

// read
router.get("/:id", (req, res) => {
  return req.db.HelpsWith.where({ id: req.params.id })
    .fetch({
      withRelated: ["product", "condition"]
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

module.exports = router;

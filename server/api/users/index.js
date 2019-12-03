const express = require("express");
const router = express.Router();

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in users." });
});

// read
router.get("/:id", (req, res) => {
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

module.exports = router;

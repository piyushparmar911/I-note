const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Notes = require("../modules/Notes");
const fetchuser = require("../middleware/fetchuser");

// route 1: get all notes using : get "api/notes/getnotes" login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "internal server error" });
  }
});

// route 2: add  notes using : post "api/notes/addnote" login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "not valid ").isLength({ min: 4 }),
    body("description", "empty description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const notes = new Notes({
        title,
        description,
        tag,
        user: req.user.id
      });

      const savednote = await notes.save();
      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "internal server error" });
    }
  }
);
module.exports = router;

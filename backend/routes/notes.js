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

// route 3: update  notes using : put "api/notes/updatenote/:id" login required
router.put(
  "/updatenote/:id",
  fetchuser,  async (req, res) => {
   const {title, description,tag} = req.body;
  //  create a new note object
  const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.despriction = description};
    if(tag){newNote.tag = tag};


    const note = await Notes.findById(req.params.id);
    // find note and updated
    if(!note)
      {
        return res.status(404).json({error: "note not found"});
      }
      // allow to update if note is match with particular user
      if(note.user.toString() !== req.user.id)
        {
          return res.status(401).json({error: "not allowed"});
        }

     await Notes.findByIdAndUpdate(req.params.id ,{$set: newNote} , {new: true});
        res.json(note);
  }
);



// route 4: delete  notes using : get "api/notes/deletenote/:id" login required
router.delete(
  "/deletenote/:id",fetchuser,
    async (req, res) => {

      // find note and deleted
    const note = await Notes.findById(req.params.id);
    if(!note)
      {
        return res.status(404).json({error: "note not found"});
      }

      // allow to delete if note is match with particular user
      if(note.user.toString() !== req.user.id)
        {
          return res.status(401).json({error: "not allowed"});
        }

     await Notes.findByIdAndDelete(req.params.id);
        res.json("success");
  }
);
module.exports = router;

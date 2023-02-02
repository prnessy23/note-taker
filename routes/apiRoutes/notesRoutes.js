const router = require("express").Router();
const { createNewNote, deleteNote } = require("../../lib/notes");
let notesArray = require("../../db/db.json");

// get notes from api/notes in JSON

router.get("/", (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post("/", (req, res) => {
  if (notesArray) {
    req.body.id = notesArray.length.toString();
  } else {
    req.body.id = 0;
  }
  res.json(createNewNote(req.body, notesArray));
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;

const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}
// delete notes function
function deleteNote(id, notes) {
  let notesArray = notes.filter((el) => el.id !== id);
  console.log(notesArray);
  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray),
    (err) => {
      if (err) throw err;
      console.log("Note Deleted!");
    }
  );
  return notesArray;
}
module.exports = {
  createNewNote,
  deleteNote,
};

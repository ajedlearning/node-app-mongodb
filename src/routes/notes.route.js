const { Router } = require('express');
const router = Router();
const { renderNoteForm, createNewNote, renderNotes, editNotes, updateNotes, deleteNotes } = require('../controllers/notes.controller');

// new notes
router.get('/notes/add', renderNoteForm);
router.post('/notes/add', createNewNote);

//get all note
router.get('/notes', renderNotes);

//update notes
router.get('/notes/edit/:id', editNotes);
router.put('/notes/edit/:id', updateNotes)

//delete notes
router.delete('/notes/delete/:id', deleteNotes)

module.exports = router;
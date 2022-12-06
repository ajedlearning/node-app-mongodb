const notesCtrl = {};

notesCtrl.renderNoteForm = (req, resp)=>{
    resp.render('notes/new-note');
};

notesCtrl.createNewNote = (req, resp)=>{
    resp.send('new note');
};

notesCtrl.renderNotes= (req, resp)=>{
    resp.send('list notes');
}

notesCtrl.editNotes= (req, resp)=>{
    resp.send('edit notes')
}

notesCtrl.updateNotes= (req, resp)=>{
    resp.send('update notes')
}

notesCtrl.deleteNotes= (req, resp)=>{
    resp.send('eliminar notes')
}

module.exports = notesCtrl;
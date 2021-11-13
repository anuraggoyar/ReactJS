const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');
//Route 1: to fetch all notes of a user using : GET 'api/notes/featchAllNotes' login required
router.get('/fetchAllNotes', fetchUser, async (req, res) => {
    try{
        const notes = await Note.find({ user: req.user.id });
        res.send(notes);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error.');
    }
})

//Route 2: add notes in db using : POST 'api/notes/addNote' login required
router.post('/addNote', fetchUser, [
    body('title', 'Enter a valid title.').isLength({min : 3}),
    body('description', 'Description must have atleast 5 characters.').isLength({min : 5}),
], async (req, res) => {

    try{
        const {title,description,tag} = req.body;
        //If there are error, Return Bad request & the error.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        //Creating a new note
        const note = new Note({
            user : req.user.id,
            title,
            description,
            tag
        });
        const savedNote = await note.save();
        res.json(savedNote);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Seerver Error');
    }

})

//Route 3: update an existing notes in db using : PUT 'api/notes/updateNote/id' login required
router.put('/updateNote/:id', fetchUser, async (req,res) => {
    const {title, description, tag} = req.body;
    try{
        //New note to be update
        const updatedNote = {};
        if(title){updatedNote.title = title}
        if(description){updatedNote.description = description}
        if(tag){updatedNote.tag = tag}
        //Find the note and update
        let note = await Note.findById(req.params.id);
        if(!note){ return res.status(404).send('Not found.')}
        if(note.user.toString() !== req.user.id){
            return res.status(401).send('Not autherized')
        }

        note = await Note.findByIdAndUpdate(req.params.id, {$set : updatedNote}, {new : true})
        res.json({note});
    } catch(error){
        console.error(error.message);
        res.status(500).send('Internal Seerver Error');
    }
})

//Route 4: delete an existing notes in db using : Delete 'api/notes/deleteNote' login required
router.delete('/deleteNote/:id', fetchUser, async (req, res) => {
    try{
        //find the note to be deleted
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send('Not found.') }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('Not autherized')
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({"success" : "Note has been deleted.", "note" : note});
    } catch(error){
        console.error(error.message);
        res.status(500).send('Internal Seerver Error');
    }
})

module.exports = router;
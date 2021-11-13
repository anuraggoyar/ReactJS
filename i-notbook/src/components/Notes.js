import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NoteContext from "../context/notes/NoteContext";
import AddNote from './AddNote';
import NoteItem
    from './NoteItem';
const Notes = (props) => {
    let history = useHistory();
    const context = useContext(NoteContext);
    const { notes, getAllNotes, updateNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    useEffect(() => {
        if(localStorage.getItem('token')){
            getAllNotes();
        } else {
            history.push('/login');
        }
    }, [])
    const openEditNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }
    const handleUpdateNote = (e) => {
        updateNote(note.id, note.etitle, note.edescription, note.etag);
        refCloseModal.current.click();
        props.showAlert("Note Updated.", 'success');
        // addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const ref = useRef(null);
    const refCloseModal = useRef(null);
    

    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <div className="container">
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="etitle"
                                            name="etitle"
                                            value={note.etitle}
                                            onChange={onChange}
                                            minLength={3}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="edescription"
                                            name="edescription"
                                            value={note.edescription}
                                            onChange={onChange}
                                            minLength={5}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">
                                            Tag
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="etag"
                                            name="etag"
                                            value={note.etag}
                                            onChange={onChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refCloseModal}type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.trim().length < 3 || note.edescription.trim().length < 5} type="button" className="btn btn-primary" onClick={handleUpdateNote}>Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={{ background: '#212529', color: 'white', borderRadius: '10px', padding: '0px 10px' }}> Your Notes</h2>
            <div className="row my-3">
                {notes.map((note) => { return <NoteItem key={note._id} updateNote={openEditNote} note={note} showAlert={props.showAlert} /> })}
            </div>
        </>
    );
}

export default Notes;
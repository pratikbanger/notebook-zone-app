import React, { useState, useContext, useEffect, useRef } from 'react'
// import React, { useState, useContext, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import Default from './Default';
import Noteitem from './Noteitem';
// import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    // let navigate = useNavigate();
    const context = useContext(noteContext);
    // const { notes, editNote } = context;
    const { notes, getNotes, editNote } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            <Default />
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: '', etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleUpdateNote = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Note has been updated successfully!!", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {/* Button trigger modal */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label my-2">Enter your note title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={3} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea type="textarea" className="form-control" id="edescription" name="edescription" value={note.edescription} cols="30" rows="5" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className='form-label'>Tag</label>
                                    <input type="text" className="form-control" id='etag' name='etag' value={note.etag} onChange={onChange} minLength={3} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5} onClick={handleUpdateNote} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            {!localStorage.getItem('token') ? <Default /> :
                <div className="container my-3">
                    <h2>Your saved notes!!</h2>
                    <div className="d-flex flex-wrap">
                        {notes.length === 0 && 'No notes to display'}
                        {notes.map((note) => {
                            return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default Notes

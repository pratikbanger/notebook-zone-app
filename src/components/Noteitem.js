import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Noteitem = (props) => {

    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <div className="card mx-3 my-3" style={{ width: "15rem" }}>
            <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" className="card-img-top" style={{ height: "8rem" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <p className="card-text"><strong>Tag: </strong>{note.tag}</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => { updateNote(note) }}>
                        <i className="fa-solid mx-2 fa-pen"></i>
                        <span>EDIT</span>
                    </div>
                    <div className="d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => { deleteNote(note._id); props.showAlert("Notes has been deleted successfully!!", "warning") }}>
                        <i className="fa-solid mx-2 fa-trash-can"></i>
                        <span>DELETE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem

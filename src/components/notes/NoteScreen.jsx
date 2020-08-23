import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);

    const { date, title, body } = formValues;
    const activeId = useRef(note.id);

    useEffect(() => {
        if (activeId.current !== note.id) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }))
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(activeId.current));
    }

    return (
        <div className="notes__main-content animate__animated animate__backInDown animate__faster">
            <NotesAppBar date={date} />

            <div className="notes__content">
                <input
                    name="title"
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    name="body"
                    placeholder="What happend today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>
                {note.url 
                    && (
                        <div className="notes__image">
                            <img
                                src={note.url}
                                alt="Ecrypse"
                            />
                        </div>
                    )
                }
            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}

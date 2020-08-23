import React, { useRef } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = ({date}) => {

    const dispatch = useDispatch();
    const fileSelector = useRef(null);
    const { active } = useSelector(state => state.notes)

    const handleSave = () => {
        dispatch(startSaveNote( active ));
    }

    const handlePictureUpload = () => {
        fileSelector.current.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>{moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
            <input
                ref={fileSelector}
                type="file"
                name="file"
                style={{display: "none"}}
                onChange={handleFileChange}
            />
            <div>
                <button
                    className="btn"
                    onClick={handlePictureUpload}
                >
                    Picture
                </button>
                <button
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

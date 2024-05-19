import React, { useState } from 'react'

const Addnote = ({ handleAddNote }) => {

    const [noteText, setnoteText] = useState('');
    const charLimit = 200;
    function handleSaveClick() {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setnoteText('');
        }


    }
    function HandleChange(event) {
        if(charLimit-event.target.value.length>=0)
        setnoteText(event.target.value);
    }
    return (
        <div className='note bg-[#67d7cc]  rounded-lg  p-4 min-h-[170px] flex flex-col justify-between '>
            <textarea onChange={HandleChange} value={noteText} className='bg-[#67d7cc] border-none resize-none outline-0' rows='8' cols='10' placeholder='Type to add a note... ' ></textarea>
            <div className='note-footer flex items-center justify-between  '>
                <small>{charLimit-noteText.length} Remaining</small>
                <button onClick={handleSaveClick} className='save bg-[#e1e1e1] border-none rounded-[15px] px-[10px] py-[5px] hover:cursor-pointer hover:bg-[#ededed]  '>Save </button>
            </div>
        </div>
    )
}
export default Addnote;
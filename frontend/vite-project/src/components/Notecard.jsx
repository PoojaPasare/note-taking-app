import React, { useState, useContext } from 'react'
import { NoteContext } from '../context/NoteContext'


function Notecard ({note}) {
  const {deleteNote,upadteNote}=useContext(NoteContext)
  const [isEditing,setIsEditing]=useState(false)
  const [editData,setEditData]=useState({
    title:note.title,
    content:note.content
  })

const handleUpdate=()=>{
    upadteNote(note._id,editData)
    setIsEditing(false)
}


  return (
  
<div
  className="
    relative overflow-hidden
    bg-white/10 dark:bg-gray-900/20
    backdrop-blur-xl
    border border-white/20 dark:border-white/10
    rounded-2xl
    shadow-xl
    hover:shadow-2xl
    hover:scale-[1.02]
    transition-all duration-300
    p-5
  "
>
  {isEditing ? (
    <>
      {/* Edit Mode */}

      <input
        type="text"
        className="
          border border-white/20
          rounded-xl
          p-3
          w-full
          mb-3
          focus:ring-2 focus:ring-blue-500
          outline-none
          bg-white/20 dark:bg-gray-700/30
          backdrop-blur-md
          text-gray-900 dark:text-white
        "
        value={editData.title}
        onChange={(e) =>
          setEditData({ ...editData, title: e.target.value })
        }
      />

      <textarea
        className="
          border border-white/20
          rounded-xl
          p-3
          w-full
          mb-3
          focus:ring-2 focus:ring-blue-500
          outline-none
          bg-white/20 dark:bg-gray-700/30
          backdrop-blur-md
          text-gray-900 dark:text-white
        "
        rows="3"
        value={editData.content}
        onChange={(e) =>
          setEditData({ ...editData, content: e.target.value })
        }
      />

      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          className="
            bg-green-500 hover:bg-green-600
            text-white
            px-4 py-2
            rounded-xl
            shadow-md
            transition
          "
        >
          Save
        </button>

        <button
          onClick={() => setIsEditing(false)}
          className="
            bg-gray-400 hover:bg-gray-500
            text-white
            px-4 py-2
            rounded-xl
            shadow-md
            transition
          "
        >
          Cancel
        </button>
      </div>
    </>
  ) : (
    <>
      {/* View Mode */}

      <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
        {note.title}
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed flex-1">
        {note.content}
      </p>

      {/* Footer: Date + Actions */}

      <div className="mt-5 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>
          {new Date(note.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="
              bg-yellow-500 hover:bg-yellow-600
              text-white
              px-3 py-1.5
              rounded-xl
              shadow-md
              transition
            "
          >
            Edit
          </button>

          <button
            onClick={() => deleteNote(note._id)}
            className="
              bg-red-500 hover:bg-red-600
              text-white
              px-3 py-1.5
              rounded-xl
              shadow-md
              transition
            "
          >
            Delete
          </button>
        </div>
      </div>
    </>
  )}
</div>


  )
}

export default Notecard

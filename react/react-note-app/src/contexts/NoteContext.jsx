import { useContext, createContext, useState, useEffect } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState(savedNotes);
  const [inputVisibility, setInputVisibility] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (item) => {
    setNotes((state) => [...state, item]);
    setInputVisibility(false);
  };
  const deleteNote = (item) => {
    const newList = notes.filter((note) => note.id !== item.id);
    if (window.confirm("Are you sure?")) {
      setNotes(newList);
    }
  };

  const values = {
    notes,
    setNotes,
    addNote,
    deleteNote,
    inputVisibility,
    setInputVisibility,
  };

  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };

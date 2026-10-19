import { useState } from "react";
import Aside from "../Aside/aside";
import Content from "../Content/content";
import Header from "../Header/header";
import style from "./dashboard.module.css";

export type Note = {
  id: number;
  title: string;
  content: string;
};

export default function Dashboard() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  function createNote() {
    const note = {
      id: Date.now(),
      title: "Nova nota",
      content: "",
    };

    setNotes([...notes, note]);
    setActiveNoteId(note.id);
  }

  function deleteNote(id: number) {
    setNotes((prev) => prev.filter((note) => note.id !== id));

    if (activeNoteId === id) {
      setActiveNoteId(null);
    }
  }

  function updateNoteTitle(id: number, title: string) {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, title } : note)),
    );
  }

  function updateNoteContent(id: number, content: string) {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, content } : note)),
    );
  }

  const activeNote = notes.find((note) => note.id === activeNoteId) ?? null;

  return (
    <main className={style.layoutNotes}>
      <div className={style.header}>
        <Header search={search} setSearch={setSearch} />
      </div>

      <div className={style.aside}>
        <Aside
          notes={notes}
          search={search}
          activeNoteId={activeNoteId}
          createNote={createNote}
          deleteNote={deleteNote}
          selectNote={setActiveNoteId}
        />
      </div>

      <div className={style.content}>
        <Content
          updateNoteContent={updateNoteContent}
          note={activeNote}
          updateNoteTitle={updateNoteTitle}
        />
      </div>
    </main>
  );
}

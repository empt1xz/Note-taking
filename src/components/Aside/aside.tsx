import { Plus, Tag, Trash } from "lucide-react";
import style from "./aside.module.css";
import { useState } from "react";

type Note = {
  title: string;
  id?: number;
};

export default function Aside() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActive] = useState<number | null>(null);

  function createNote() {
    const note = {
      title: "nota 5",
      id: Date.now(),
    };

    setNotes([...notes, note]);
  }
  function deleteNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <>
      <aside className={style.aside}>
        <h1>Finanças</h1>

        <button className={style.buttonCreateNote} onClick={createNote}>
          <Plus size={16} /> Criar nova nota
        </button>

        <p className={style.notes}>Notas</p>

        {notes.map((item) => (
          <section className={style.listNotes} key={item.id}>
            <article
              className={activeNote === item.id ? style.active : ""}
              onClick={() => setActive(item.id!)}
            >
              <Tag size={18} /> <p>{item.title}</p>{" "}
              <Trash
                size={18}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(item.id!);
                }}
              />
            </article>
          </section>
        ))}
      </aside>
    </>
  );
}

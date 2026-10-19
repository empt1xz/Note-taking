import { Plus, Tag, Trash } from "lucide-react";
import style from "./aside.module.css";
import type { Note } from "../Dashboard/dashboard";

type AsideProps = {
  notes: Note[];
  search: string;
  activeNoteId: number | null;
  createNote: () => void;
  deleteNote: (id: number) => void;
  selectNote: (id: number) => void;
};

export default function Aside({
  notes,
  search,
  activeNoteId,
  createNote,
  deleteNote,
  selectNote,
}: AsideProps) {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <aside className={style.aside}>
      <h1>Anotações</h1>

      <button className={style.buttonCreateNote} onClick={createNote}>
        <Plus size={16} />
        Criar nova nota
      </button>

      <p className={style.notes}>Notas</p>

      {filteredNotes.map((item) => (
        <section className={style.listNotes} key={item.id}>
          <article
            className={activeNoteId === item.id ? style.active : ""}
            onClick={() => selectNote(item.id)}
          >
            <Tag size={18} />
            <p>{item.title}</p>

            <Trash
              onClick={(e) => {
                e.stopPropagation();
                deleteNote(item.id);
              }}
              size={18}
            />
          </article>
        </section>
      ))}
    </aside>
  );
}

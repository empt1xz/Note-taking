
import style from "./content.module.css";
import type { Note } from "../Dashboard/dashboard";

type ContentProps = {
  note: Note | null;
  updateNoteTitle: (id: number, title: string) => void;
  updateNoteContent: (id: number, content: string) => void;
};

export default function Content({
  note,
  updateNoteTitle,
  updateNoteContent,
}: ContentProps) {
  if (!note) {
    return (
      <main className={style.main}>
        <p className={style.selection}>Selecione uma nota ou crie uma nova.</p>
      </main>
    );
  }

  return (
    <main className={style.main}>
      <header>
        <input
          type="text"
          value={note.title}
          placeholder="Título da nota"
          onChange={(e) =>
            updateNoteTitle(note.id, e.target.value)
          }
          className={style.title}
        />
      </header>

      <section>
        <textarea
          value={note.content}
          placeholder="Escreva o conteúdo da sua nota aqui..."
          onChange={(e) =>
            updateNoteContent(note.id, e.target.value)
          }
        />
      </section>
    </main>
  );
}

import { Search } from "lucide-react";
import style from "./header.module.css";

type HeaderProps = {
  search: string,
  setSearch: (value: string) => void
}

export default function Header({search, setSearch}: HeaderProps) {
  return (
    <>
      <header className={style.header}>
        <h1>Suas Notas</h1>

        <label className={style.label}>
          <Search color="rgba(41, 41, 41, 0.61)" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar nota" />
        </label>
      </header>
    </>
  );
}

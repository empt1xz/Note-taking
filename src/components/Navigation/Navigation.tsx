import styles from "./Navigation.module.css";
import { CiSearch } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";

export default function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.divNav1}>All Notes</div>
        <div className={styles.divNav2}>
          <div className={styles.SearchInput}>
            <input
              className={styles.SearchBar}
              type="text"
              placeholder="Search by title or content"
            />
            <CiSearch className={styles.SearchIcon} />
          </div>
          <FaGear className={styles.Config} />
        </div>
      </nav>
    </>
  );
}

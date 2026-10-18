import styles from "./content.module.css";
export default function ContentNote() {
  return (
    <form className={styles.formInput}>
      <textarea className={styles.inputTitle} cols="100" rows="3"></textarea>
      <textarea className={styles.inputContent} cols="100" rows="45"></textarea>
    </form>
  );
}

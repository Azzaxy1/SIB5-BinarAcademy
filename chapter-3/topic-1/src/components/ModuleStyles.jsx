import styles from "./modulestyles.module.css";

const ModuleStyles = () => {
  return (
    <>
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <button className={styles.btn}>Berubah</button>
        <button className={styles["btn-success"]}>Tetap</button>
        <button className={styles["btn-sm"]}>Tetap</button>
      </div>
    </>
  );
};

export default ModuleStyles;

import styles from './loading.module.less'

function Loading() {
  return (
    <div className={styles.transition_container}>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
}

export default Loading

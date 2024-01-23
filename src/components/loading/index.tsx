
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles['loading-container']}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;

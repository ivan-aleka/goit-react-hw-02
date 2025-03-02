import styles from './Options.module.css';
export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className="options">
      <button className={styles.Options} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button
        className={styles.Options}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.Options} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.Options} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

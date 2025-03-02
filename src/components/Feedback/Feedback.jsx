import styles from './Feedback.module.css';
export default function Feedback({ feedback, total, positive }) {
  return (
    <div className="feedback">
      <h2>Feedback Summary</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p className={styles.Positivefeedback}>Positive feedback: {positive}%</p>
    </div>
  );
}

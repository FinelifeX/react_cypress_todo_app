import styles from './Input.module.css';

function TextArea(props) {
  return (
    <textarea className={styles.textarea} {...props}></textarea>
  )
}

export default function Input(props) {
  return (
    <input className={styles.input} { ...props } />
  )
}

Input.TextArea = TextArea;


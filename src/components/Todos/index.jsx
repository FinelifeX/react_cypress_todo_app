import Store from '../../store';
import List from '../List';
import styles from './Todos.module.css';

export default function Todos() {
  const { todos, removeTodo } = Store.useStore();

  return (
    <div className={styles.container}>
      <List>
        {todos.map((item) => (
          <List.Item>
            <div className={styles.todo}>
              <input className={styles.todoMark} type="checkbox" />
              <div className={styles.todoContent}>
                <span className={styles.todoTitle}>{item.name}</span>
                <br />
                <small className={styles.todoDescription}>{item.description}</small>
              </div>
              <button className={styles.todoRemove} onClick={() => removeTodo(item.id)}>
                X
              </button>
            </div>
          </List.Item>
        ))}
      </List>
    </div>
  )
}
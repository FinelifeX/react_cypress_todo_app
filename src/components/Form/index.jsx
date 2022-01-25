import { useReducer } from 'react';
import Store from '../../store';
import Button from '../Button';
import Input from '../Input';
import styles from './Form.module.css';

export default function Form() {
  const { addTodo } = Store.useStore();
  const [formData, changeFormData] = useReducer(
    (state, action) => ({ ...state, [action.field]: action.value }),
    { 
      name: '', 
      description: '',
    }
  )

  function onFieldChange({ target: { name, value } }) {
    changeFormData({ field: name, value });
  };

  function onSubmit(e) {
    e.preventDefault();

    addTodo({ id: Date.now(), ...formData });
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label>
          <span>Name</span>
          <Input name="name" type="text" onChange={onFieldChange}/>
        </label>
        <label>
          <span>Description</span>
          <Input.TextArea name="description" rows={5} onChange={onFieldChange} />
        </label>
        <div>
          <Button htmlType="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}
import { useReducer } from 'react';
import Store from '../../store';
import Button from '../Button';
import Input from '../Input';
import styles from './Form.module.css';

const FORM_INIT_STATE = {
  name: '',
  description: '',
};

export default function Form() {
  const { addTodo } = Store.useStore();
  const [formData, changeFormData] = useReducer(
    (state, action) => {
      if (action.reset) {
        return FORM_INIT_STATE;
      }

      return { ...state, [action.field]: action.value };
    },
    FORM_INIT_STATE
  )

  function onFieldChange({ target: { name, value } }) {
    changeFormData({ field: name, value });
  };

  function onSubmit(e) {
    e.preventDefault();

    addTodo({ id: Date.now(), ...formData });
    changeFormData({ reset: true });
  };

  const submitDisabled = !formData.name || !formData.description;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <Input 
          data-testid="input-name" 
          name="name" 
          type="text" 
          value={formData.name} 
          onChange={onFieldChange}
        />
      </label>
      <label>
        <span>Description</span>
        <Input.TextArea
          data-testid="input-description"
          name="description" 
          rows={5} 
          value={formData.description} 
          onChange={onFieldChange} 
        />
      </label>
      <div className={styles.formButtons}>
        <Button data-testid="button-submit" htmlType="submit" className={styles.formSubmit} disabled={submitDisabled}>Send</Button>
      </div>
    </form>
  )
}
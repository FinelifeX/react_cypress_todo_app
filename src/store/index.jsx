import { createContext, useContext, useEffect, useState } from "react"
import noop from '../utils/noop';

const StoreContext = createContext({
  todos: [],
  addTodo: noop,
  removeTodo: noop,
});

function StoreProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos(prev => [...prev, todo]);
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  useEffect(() => {
    console.log('[Store]', 'changed', todos.map(JSON.stringify));
  }, [todos])

  return (
    <StoreContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
    }}>
      {children}
    </StoreContext.Provider>
  )
};

function useStore() {
  const store = useContext(StoreContext);

  return store;
}

const Store = {
  Provider: StoreProvider,
  useStore,
};

export default Store;
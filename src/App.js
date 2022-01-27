import Form from "./components/Form";
import Layout from "./components/Layout";
import Todos from "./components/Todos";
import Store from './store';

function App() {
  return (
    <Store.Provider>
      <Layout>
        <Form />
        <Todos />
      </Layout>
    </Store.Provider>
  );
}

export default App;

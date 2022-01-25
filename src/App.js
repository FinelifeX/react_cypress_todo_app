import Form from "./components/Form";
import Layout from "./components/Layout";
import Store from './store';

function App() {
  return (
    <Store.Provider>
      <Layout>
        <Form />
      </Layout>
    </Store.Provider>
  );
}

export default App;

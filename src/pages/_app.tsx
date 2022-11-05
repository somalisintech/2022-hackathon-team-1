import { AppProps } from 'next/app';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

GetCampaign(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(res => setTodos(res.slice(0,10)))
  .catch(err => setError(err))
}, [])
return (
  <div className="App">
    {todos.length > 0 ? todos.map((todo:Todo, index: number) => <Todo todo={todo} index={index} handleCompleted={handleCompleted} handleDelete={handleDelete}/>) : (<Loader/>)}
    <TodoForm handleOnSubmit={handleOnSubmit} />
  </div>
);
}

export default MyApp;

import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Todo from './Todo';

function App(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1", "Todo2"]);

  const increment = () => {
    setCount(c=> c + 1);
  }

  return(
    <>
      <Todo todos={todos}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


reportWebVitals();

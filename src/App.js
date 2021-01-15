import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';


function App() {
  return (
    <div className="container">
      <Header />
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;

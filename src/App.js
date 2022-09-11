import './App.css';
import ListaTareas from './components/ListaTareas/ListaTareas';

function App() {
  return (
    <div className="App">

        <div className="todo-container">
          <h1>Mis Tareas</h1>
          <ListaTareas/>
        </div>
    </div>
  );
}

export default App;

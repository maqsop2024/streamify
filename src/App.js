import AddMovie from './AddMovie';
import './App.css';
import DisplayMovies from './DisplayMovies';
import DeleteMovie from './DeleteMovie';

function App() {
  return (
    <div className="App">
      <h2>Movies Management System</h2>
      <AddMovie></AddMovie>
      <hr/>
      <DisplayMovies></DisplayMovies>
      <hr/>
      <DeleteMovie></DeleteMovie>
    </div>
  );
}

export default App;

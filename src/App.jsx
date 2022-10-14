import './App.scss';
import ToDo from './components/ToDo/ToDo';

const App = () => {
  return (
    <div className="App">
      {/* <header className="header">
        <h2>My ToDos</h2>
        <button className='header__reset' onClick={() => toggleReset}>Reset</button>
      </header> */}
      <ToDo />
    </div>
  );
}

export default App;

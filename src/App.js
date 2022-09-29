
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import { Mgverde } from './componentes/Mgverde';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <Mgverde/>
      <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import AppContainer from './components/AppContainer/AppContainer';
function App() {
  localStorage.setItem("Todos", "");
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

export default App;

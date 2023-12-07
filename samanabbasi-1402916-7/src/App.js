import './App.css';
import Bottoms from './components/bottons/Bottons';

function App() {
  return (
    <div className="App">
      <Bottoms looks={"Primary"} variants={"Filled"} as='a' size={"Medium"} type={"submit"} disabled={false} href={"https://google.com"} target={"blank"}>
        Salam
      </Bottoms>
    </div>
  );
}

export default App;

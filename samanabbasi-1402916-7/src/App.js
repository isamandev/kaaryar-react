import './App.css';
import Bottoms from './components/bottons/Bottons';

function App() {
  const eventHandler = () => {
    console.log("salam")
  }
  return (
    <div className="App">
      <Bottoms looks={"Primary"} variants={"OutLined"} as={"a"} size={"Large"} type={"submit"} target={"blank"} onClick={eventHandler}>
        سلام کاریار
      </Bottoms>
    </div>
  );
}

export default App;

import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';

export default function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />
      {/* Random Colour component */}
      <RandomColor />
    </div>
  )
}


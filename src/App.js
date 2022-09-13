import { collection, addDoc, getDocs } from 'firebase/firestore';
import './App.css';
import db from './firebase-config';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;

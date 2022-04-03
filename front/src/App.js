import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/AppBar';
import BasicTextFields from './components/TextField';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <BasicTextFields></BasicTextFields>
    </div>
  );
}

export default App;

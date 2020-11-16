import logo from './icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deseja tirar dúvidas? Nos escreva.
        </p>
        <a
          className="App-link"
          href="https://cwbox.movidesk.com/form/3336/"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-mail
        </a>

        <a
          className="App-link"
          href="https://api.whatsapp.com/send?phone=5562985863445"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </a>
      </header>
    </div>
  );
}

export default App;

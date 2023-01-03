import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import List from './components/List';

function App() {
  const nome = 'Cleiton'

  const url = 'http://via.placeholder.com/150'

  return (
    <div className="App App-header">
      <h1>Olá {nome}, tudo bom</h1>

      <p>Olá react</p>
      <img src={logo}alt="Minha Imagem" className='App-logo'></img>

      <HelloWorld/>
      <Frase/>
      <SayMyName nome="Fernando"/>
      <List marca="Ferrarin"/>
    </div>
  );
}

export default App;

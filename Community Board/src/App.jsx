import './App.css';
import Container from './components/Container';

const App = () => {

  return (
    <div className="App">
      <div class = "header">
        <img src ="/Cincinnati.png" alt="Cincinnati Skyline"></img>
        <h1>Restaurants in Cincinnati</h1>
      </div>
      <Container />
    </div>
  )
}

export default App;
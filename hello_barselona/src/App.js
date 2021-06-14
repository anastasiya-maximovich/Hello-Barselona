import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Barselona</h1>
        <div>
          <span>Для загрузки погоды нажмите кнопку "Обновить"</span><button className="App-btn">Обновить</button>
        </div>
        <div className="App-weather">27ºC</div>
      </header>
    </div>
  );
}

export default App;

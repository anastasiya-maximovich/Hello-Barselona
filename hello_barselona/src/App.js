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

const btn = document.querySelector(".App-btn"),
      weather = document.querySelector(".App-weather");

    async function getWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Barselona&appid=dd6be90a16121aee247f2cb12a37afb2&units`
        
        const response = await fetch(url);
        const data = await response.json();
           
        weather.textContent = `${data.main.temp.toFixed(0)}ºC`;
      }

getWeather();

btn.addEventListener("click", getWeather)


export default App;

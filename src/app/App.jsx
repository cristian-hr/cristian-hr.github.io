import '../scss/App.scss';
import routes from "../routes/Routes"

function App() {
  return (
    <div className="App">
      {routes()}
    </div>
  );
}

export default App;

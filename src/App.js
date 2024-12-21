import './App.css';
import privateLayout from './layouts/privateLayout';
import home from './screens/home';

function App() {
  const MyComponentWithHome = privateLayout(home);

  return (
    <div className="App">
      <MyComponentWithHome name="Ahmad" />
    </div>
  );
}

export default App;

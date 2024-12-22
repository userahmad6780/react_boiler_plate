import './App.css';
import PrivateLayout from './layouts/PrivateLayout';
import { Routes, Route } from "react-router";
import { routes } from './routes';
import PublicLayout from './layouts/PublicLayout';

// Function to enhance components dynamically
function layoutSelection(Component, isPublic) {
  return isPublic ? PublicLayout(Component) : PrivateLayout(Component);
}

function App() {

  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, component, isPublic }, index) => {
            const EnhancedComponent = layoutSelection(component, isPublic);
            return (
                <Route
                    key={index}
                    path={path}
                    element={<EnhancedComponent />}
                />
            );
        })}
      </Routes>
    </div>
  );
}

export default App;

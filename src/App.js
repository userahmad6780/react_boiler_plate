import './App.css';
import privateLayout from './layouts/privateLayout';
import { Routes, Route } from "react-router";
import { routes } from './routes';

// Function to enhance components dynamically
function layoutSelection(Component, isPublic) {
  return isPublic ? Component : privateLayout(Component);
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

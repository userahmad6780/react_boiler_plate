import './App.css';
import { Routes, Route } from "react-router";
import { routes } from './routes';
import PublicRoute from './routes/publicRoutes';
import PrivateRoute from './routes/privateRoute';


function App() {
  const isAuthenticated = true

  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, component, isPublic, layout }, index) => {
          const RouteComponent = isPublic ? PublicRoute : PrivateRoute;
          return (
            <Route
              key={index}
              path={path}
              element={
                <RouteComponent
                  path={path}
                  component={component}
                  layout={layout}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

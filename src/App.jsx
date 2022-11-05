import User from './components/User'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import { //Esta forma siempre funciona así con un import
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    // Defino las rutas primero con el Router
    // Luego con las Routes va a donde van a llevar las rutas con el path y el primero va con exact path para que renderice primero el home
    <div className="container">
      <Router>
        <Link to="/" className="btn btn-primary mx-2 mt-3">Inicio</Link>
        <Link to="/about" className="btn btn-primary mx-2 mt-3">Acerca de Nosotros</Link>
        <Link to="/dashboard" className="btn btn-primary mx-2 mt-3">Tablero Principal</Link>
        <Link to="/user" className="btn btn-primary mx-2 mt-3">Usuario</Link>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/user" element={<User />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// LAS RUTAS FUNCIONAN COMO EL HREF PERO A DIFERENCIA DE HTML TOCA TIRAR CÓDIGO Y SE USA INSTALKANDO LA LIBRERIA EN ESTE CASO REACT-ROUTER-DOM
import Cars from './views/Car';
import ProfileView from './views/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import CarSingle from './views/CarSingle';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link classname="nav-link" to="/">Home</Link>
          {/* <Link to="/inventory">Car Inventory</Link> */}
          <Link classname="nav-link" to="/profile">Profile</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car">
          <Route path=":id" element={<CarSingle />} />
        </Route>
        <Route path="/inventory" element={<Cars />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

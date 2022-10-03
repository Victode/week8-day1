import Cars from './views/Car';
import ProfileView from './views/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Car Inventory</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/inventory" element={<Cars />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

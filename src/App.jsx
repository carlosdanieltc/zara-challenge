import NavBar from './components/NavBar/NavBar'
import PhoneListView from './views/PhoneListView'
import CartView from './views/CartView'
import PhoneDetailView from './views/PhoneDetailView'
import "./App.css"
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const App = () => {
  return (
    <Router >
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<PhoneListView />} /> 
          <Route path="/cart" element={<CartView />} /> 
          <Route path="/phone/:phoneId" element={<PhoneDetailView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

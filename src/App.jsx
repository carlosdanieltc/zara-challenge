import NavBar from './components/NavBar/NavBar'
import PhoneListView from './views/PhoneList'
import CartView from './views/Cart'
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

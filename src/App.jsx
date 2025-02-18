import NavBar from './components/NavBar/NavBar'
import PhoneList from './views/PhoneList'
import "./App.css"
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<PhoneList />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

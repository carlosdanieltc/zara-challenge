import { useState } from 'react'
import PhoneList from './components/PhoneList/PhoneList'
import NavBar from './components/NavBar/NavBar'
import "./App.css"
import SearchBar from './components/SearchBar/SearchBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="App">
        <NavBar setSearchQuery={setSearchQuery} ></NavBar>
        <Routes>
          <Route path="/" element={<PhoneList searchQuery={searchQuery} />} />
        </Routes>
      </div>
    </>
  )
}

export default App

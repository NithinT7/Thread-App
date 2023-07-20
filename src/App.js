import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Feed from './components/Feed';
import NewPost from './components/NewPost';
import { AppContext } from './context/AppContext';
function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/new" element={<NewPost />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

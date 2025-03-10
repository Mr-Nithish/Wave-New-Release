import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Recipie from './pages/Recipie';

function App() {
  return (
    <div className="App">
     <Navbar />
     
     <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/recipie/:id" element={<Recipie />} />
     </Routes>

     <Footer />
    </div>
  );
}

export default App;

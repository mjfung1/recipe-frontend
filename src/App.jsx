import './App.css';
import './form.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateRecipe } from './pages/CreateRecipe';
import { SavedRecipes } from './pages/SavedRecipes';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes className="middle-container">
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

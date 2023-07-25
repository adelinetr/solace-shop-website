import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import WomensClothes from './components/WomensClothes/WomensClothes'
import OurStory from './components/OurStory/OurStory'
import Contacts from './components/Contacts/Contacts'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/womens-clothes' element={<WomensClothes />} />
        <Route path='/our-story' element={<OurStory />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

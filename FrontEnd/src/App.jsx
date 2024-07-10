import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import ArtistDetails from "./components/ArtistDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/artists/:id" element={<ArtistDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

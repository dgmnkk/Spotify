import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import ArtistDetails from "./components/ArtistDetails";
import AlbumDetails from "./components/AlbumDetails";
import Register from './components/account/register/Register';
import Login from './components/account/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/artists/:id" element={<ArtistDetails />}/>
            <Route path="/albums/:id" element={<AlbumDetails />}/>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

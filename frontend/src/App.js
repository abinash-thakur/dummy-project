import './App.css';
import Mainnavbar from './components/Mainnavbar';
import Movielist from './components/movielist';
import Details from './components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <>
            <Mainnavbar/>
            <BrowserRouter basename='/'>
                <Routes>
                    <Route path='/' element={<Movielist/>}/>
                    <Route path='/Details' element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

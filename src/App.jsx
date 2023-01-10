import './App.css';
import Login from './views/login';
import Home from './views/home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}></Route>
                <Route path='home' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

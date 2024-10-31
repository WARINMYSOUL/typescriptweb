import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header} from './components/Header.tsx';
import {Home} from './pages/Home.tsx';
import {About} from './pages/About.tsx';
import {Skills} from './pages/Skills.tsx';
import {Projects} from './pages/Projects.tsx';
import {Contact} from './pages/Contact.tsx';
import {Footer} from './components/Footer.tsx';

export const App = () => {
    return (
        <div className="container flex flex-col min-h-screen bg-gray-100">
            <Router>
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </div>
    );
};

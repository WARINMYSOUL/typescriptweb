import './styles/BaseScss/ScrollBar.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import './styles/TailwindSS/output.css';
import './styles/BaseScss/ScrollBar.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
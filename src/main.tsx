import '../src/styles/components/Header.scss';
import '../src/styles/components/Footer.scss';
import '../src/styles/pages/About.scss';
import '../src/styles/pages/Contact.scss';
import '../src/styles/pages/Home.scss';
import '../src/styles/pages/Project.scss';
import '../src/styles/pages/Skils.scss';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
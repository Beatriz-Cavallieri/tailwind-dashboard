import App from './App';
import './style.css'

import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
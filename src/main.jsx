import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/globals.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/* Intro screen (see index.html): keep it up for ~2s from page start on the
   first visit of the session, then fade it out and remove it. */
const splash = document.getElementById('splash');
if (splash) {
  const wait = Math.max(0, 2000 - performance.now());
  setTimeout(() => {
    splash.classList.add('is-hidden');
    try {
      sessionStorage.setItem('splash-seen', '1');
    } catch {
      /* storage unavailable — the intro simply shows again next time */
    }
    setTimeout(() => splash.remove(), 500);
  }, wait);
}

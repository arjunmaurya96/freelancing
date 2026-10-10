/*
  LOADING (global)
  ------------------------------------------------------------------
  Brand-based spinner: the charcoal "C" from the logo with the orange
  arrow sweeping around it. Pure CSS — no JavaScript animation.

  It fades in after a short delay, so fast loads never flash a spinner.

  Usage:
    <Loading />                → fills the page area (route loading)
    <Loading size="sm" inline /> → inside a button or small block
*/

import './Loading.css';

export default function Loading({ label = 'Loading', inline = false, size = 'md' }) {
  return (
    <div className={inline ? 'loading loading-inline' : 'loading loading-page'} role="status" aria-live="polite">
      <svg className={`loading-mark loading-${size}`} viewBox="0 0 48 48" aria-hidden="true">
        <circle className="loading-track" cx="24" cy="24" r="18" pathLength="100" />
        <circle className="loading-arc" cx="24" cy="24" r="18" pathLength="100" />
      </svg>
      <span className="loading-label">{label}…</span>
    </div>
  );
}

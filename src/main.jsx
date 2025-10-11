import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Preloader from './modules/Preloader.jsx';

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (or wait for actual assets)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Preloader /> : <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

import './Preloader.css';

export default function Preloader({ fadeOut }) {
  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
}


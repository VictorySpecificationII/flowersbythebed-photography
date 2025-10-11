import "./GallerySection.css";

export default function GallerySection({ images, title, onClose }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="gallery-backdrop" onClick={onClose}>
      <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose}>&times;</button>
        <h2>{title}</h2>
        <div className="gallery-images">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`${title} ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

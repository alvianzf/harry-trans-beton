
const imageCount = 29;
const images = Array.from({ length: imageCount }, (_, i) => `/images/${i + 1}.jpeg`);

function Galleries() {
    return (
        <div className="gallery-container">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
            ))}
        </div>
    );
}

export default Galleries;
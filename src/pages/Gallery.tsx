import React from 'react'
import Galleries from '../components/gallery/Galleries';

const Gallery: React.FC<PageProps> = ({ setPage }) => {
    return (
        React.useEffect(() => {
            setPage('gallery');
            document.title = "Gallery"
        }, [setPage]),
        <div>
            <Galleries />
        </div>
    )
}

export default Gallery;
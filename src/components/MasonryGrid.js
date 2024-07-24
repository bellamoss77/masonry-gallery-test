import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "./Lightbox";
import LikeButton from "./LikeButton";
import LikedModal from "./LikedModal";
import { LikedProvider, useLiked } from "./LikedContext";
import './MasonryGrid.scss';

const MasonryGridContent = ({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const { likedImages, listBtnVisible } = useLiked();

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        400: 1
    };

    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {images.map((image, index) => (
                    <div key={index} className="masonry-item" onClick={() => openLightbox(index)}>
                        <img src={image.src} alt={image.alt} />
                        <LikeButton image={image} />
                    </div>
                ))}
            </Masonry>
            <Lightbox
                images={images}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                startIndex={currentImageIndex}
            />
            {listBtnVisible && (
                <button className="open-modal-btn visible" onClick={() => setModalOpen(true)}>
                    Review Liked Images
                </button>
            )}
            <LikedModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
};

const MasonryGrid = ({ images }) => (
    <LikedProvider>
        <MasonryGridContent images={images} />
    </LikedProvider>
)

export default MasonryGrid;
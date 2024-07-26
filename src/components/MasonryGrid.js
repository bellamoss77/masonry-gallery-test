import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from "./Lightbox";
import LikeButton from "./LikeButton";
import LikedModal from "./LikedModal";
import { LikedProvider, useLiked } from "./LikedContext";
import './MasonryGrid.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MasonryGridContent = ({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const { listBtnVisible } = useLiked();

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const handleImageLoad = (index) => {
        setImageLoaded((prevState) => ({
            ...prevState,
            [index]: true,
        }));
    }

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
                        <LazyLoadImage 
                            src={image.src} 
                            alt={image.alt}
                            loading="lazy"
                            effect="blur"
                            style={{ objectFit: 'cover' }}
                            onLoad={() => handleImageLoad(index)} 
                        />
                        {imageLoaded[index] && <LikeButton image={image} />}
                    </div>
                ))}
            </Masonry>
            <Lightbox
                images={images}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                startIndex={currentImageIndex}
            />
            <button
                className={`open-modal-btn ${listBtnVisible ? 'visible' : ''}`}
                onClick={() => setModalOpen(true)}
            >
                Review <FontAwesomeIcon icon={faHeart} />
            </button>
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
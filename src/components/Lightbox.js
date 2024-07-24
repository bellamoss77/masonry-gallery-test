import React, { useState, useEffect, useCallback } from 'react';
import ReactModal from 'react-modal';
import { IoIosCloseCircle } from 'react-icons/io';
import { GrNext, GrPrevious } from 'react-icons/gr';
import LikeButton from './LikeButton';
import './Lightbox.scss';

ReactModal.setAppElement('#root');

const Lightbox = ({ images, isOpen, onClose, startIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(startIndex);
        }
    }, [isOpen, startIndex]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            e.stopPropagation();
            if (e.key === 'ArrowRight') {
                goToNext();
            } else if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, goToNext, goToPrevious, onClose]);

    if (!isOpen) {
        return null;
    }

    const currentImage = images[currentIndex];

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Lightbox"
            className="lightbox"
            overlayClassName="lightbox-overlay"
        >
            <div className="lightbox-content">
                <div className="lightbox-img">
                    <img src={currentImage.src} alt={currentImage.alt} />
                    <LikeButton image={currentImage} />
                    <div className="lightbox-caption">
                        {currentImage.caption}
                    </div>
                </div>
                <button className="lightbox-close" onClick={onClose}>
                    <IoIosCloseCircle />
                </button>
                <button className="lightbox-prev" onClick={goToPrevious}>
                    <GrPrevious />
                </button>
                <button className="lightbox-next" onClick={goToNext}>
                    <GrNext />
                </button>
            </div>
        </ReactModal>
    );
};

export default Lightbox;

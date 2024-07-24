import React from 'react';
import ReactModal from 'react-modal';
import emailjs from 'emailjs-com';
import { useLiked } from './LikedContext';
import './LikedModal.scss';

ReactModal.setAppElement('#root');

const LikedModal = ({ isOpen, onClose }) => {
    const { likedImages, clearLikedImages } = useLiked();

    const sendEmail = () => {
        const templateParams = {
            message: likedImages.map(img => `${img.caption} (ID: ${img.id})`).join('\n')
        };

        emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_public_key')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                clearLikedImages();
                onClose();
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Liked Images"
            className="liked-modal"
            overlayClassName="liked-modal-overlay"
        >
            <div className="liked-modal-content">
                <h2>Liked Images</h2>
                <ul>
                    {likedImages.map(img => (
                        <li key={img.id}>{img.caption}</li>
                    ))}
                </ul>
                <div className="modal-buttons">
                    <button onClick={sendEmail}>Send Suggestions</button>
                    <button onClick={() => { clearLikedImages(); onClose(); }}>Clear and Close</button>
                </div>
            </div>
        </ReactModal>
    );
};

export default LikedModal;

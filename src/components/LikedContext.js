import React, { createContext, useState, useContext } from 'react';

const LikedContext = createContext();

export const useLiked = () => useContext(LikedContext);

export const LikedProvider = ({ children }) => {
    const [likedImages, setLikedImages] = useState([]);
    const [likes, setLikes] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [listBtnVisible, setListBtnVisible] = useState(false);

    const handleLikeClick = (imageId, images) => {
        setLikes((prevLikes) => {
            const newLikes = { ...prevLikes };
            newLikes[imageId] = !newLikes[imageId];

            if (newLikes[imageId]) {
                setLikedImages((prevLikedImages) => [
                    ...prevLikedImages,
                    images.find((img) => img.id === imageId)
                ]);
            } else {
                setLikedImages((prevLikedImages) =>
                    prevLikedImages.filter((img) => img.id !== imageId)
                );
            }
            return newLikes;
        });

        if (Object.values(likes).filter((like) => like).length >= 1) {
            setListBtnVisible(true);
        }
    };

    const clearLikedImages = () => {
        setLikedImages([]);
        setLikes({});
        setListBtnVisible(false);
    };

    return (
        <LikedContext.Provider
            value={{
                likedImages,
                setLikedImages,
                likes,
                handleLikeClick,
                modalOpen,
                setModalOpen,
                listBtnVisible,
                setListBtnVisible,
                clearLikedImages,
            }}
        >
            {children}
        </LikedContext.Provider>
    );
};

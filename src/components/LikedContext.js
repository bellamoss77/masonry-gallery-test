import React, { createContext, useState, useContext, useEffect } from 'react';

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
    };

    useEffect(() => {
        setListBtnVisible(Object.values(likes).some((like) => like));
    }, [likes]);

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

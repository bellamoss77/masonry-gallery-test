import React, { createContext, useState, useContext } from "react";

const LikedContext = createContext();

export const useLiked = () => useContext(LikedContext);

export const LikedProvider = ({ children }) => {
    const [likedImages, setLikedImages] = useState([]);

    const toggleLike = (image) => {
        setLikedImages((prev) => {
            const isLiked = prev.some((img) => img.id === image.id);

            if (isLiked) {
                return prev.filter((img) => img.id !== image.id);
            } else {
                return [...prev, image];
            }
        });
    };

    const isLiked = (imageId) => likedImages.some((img) => img.id === imageId);

    const clearLikedImages = () => setLikedImages([]);

    return (
        <LikedContext.Provider value={{ likedImages, toggleLike, isLiked, clearLikedImages }}>
            {children}
        </LikedContext.Provider>
    );
};
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './LikeButton.scss';
import { useLiked } from "./LikedContext";

const LikeButton = ({ image, images }) => {
    const { isLiked, toggleLike } = useLiked();
    const liked = image ? isLiked[image.id] : false;

    return (
       <button 
            className={`like-btn ${liked ? 'liked' : ''}`}
            onClick={() => image && toggleLike(image.id, images)}>
    
                <FontAwesomeIcon icon={liked ? SolidHeart : regularHeart} />
            </button>
    );
};

export default LikeButton;
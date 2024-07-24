import React, { useContext } from "react";
import { useLiked} from "./LikedContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './LikeButton.scss';


const LikeButton = ({ image }) => {
    const { likes, handleLikeClick } = useLiked();
    const liked = likes[image.id];

    return (
        <button
            className={`like-btn ${liked ? 'liked' : 'not-liked'}`}
            onClick={(e) => { e.stopPropagation(); handleLikeClick(image.id, [image]); }}
        >
            <FontAwesomeIcon icon={liked ? SolidHeart : regularHeart} />
        </button>
    )
};

export default LikeButton;
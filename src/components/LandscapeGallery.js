import React from "react";
import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-JULY_2.png',
        alt: 'James River Park',
        caption: 'Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 1,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-JULY_3.png',
        alt: 'James River Park',
        caption: 'View from Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 2,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-JULY_4.png',
        alt: 'James River Park',
        caption: 'View from Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 3,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-JULY_H_1.png',
        alt: 'James River Park',
        caption: 'View from Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 4,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-JULY_H_5.png',
        alt: 'James River Park',
        caption: 'View from Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 5,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_1.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk - Richmond, VA - July 2024',
        id: 6,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_2.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #2 - Richmond, VA - July 2024',
        id: 7,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_3.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #3 - Richmond, VA - July 2024',
        id: 8,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_4.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #4 - Richmond, VA - July 2024',
        id: 9,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_5.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #5 - Richmond, VA - July 2024',
        id: 10,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_6.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #6 - Richmond, VA - July 2024',
        id: 11,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_7.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #7 - Richmond, VA - July 2024',
        id: 12,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_8.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools Under the Bridge - Richmond, VA - July 2024',
        id: 13,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_9.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #8 - Richmond, VA - July 2024',
        id: 14,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_10.png',
        alt: 'James River Park',
        caption: 'James River Rapids Off Belle Isle - Richmond, VA - July 2024',
        id: 15,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_11.png',
        alt: 'James River Park',
        caption: 'James River Rapids Off Belle Isle #2 - Richmond, VA - July 2024',
        id: 16,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_12.png',
        alt: 'James River Park',
        caption: 'James River Rapids Off Belle Isle #3 - Richmond, VA - July 2024',
        id: 17,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_13.png',
        alt: 'James River Park',
        caption: 'Goose Keeps Watch from Rock Amidst Rapids Off Belle Isle #4 - Richmond, VA - July 2024',
        id: 18,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_14.png',
        alt: 'James River Park',
        caption: 'Driftwood on the Rocks Along the James River Off Belle Isle - Richmond, VA - July 2024',
        id: 19,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_15.png',
        alt: 'James River Park',
        caption: 'Downtown Richmond Skyline from Belle Isle - Richmond, VA - July 2024',
        id: 20,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_16.png',
        alt: 'James River Park',
        caption: 'Reflection on the James of Downtown Richmond, View from Belle Isle - Richmond, VA - July 2024',
        id: 21,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_17.png',
        alt: 'James River Park',
        caption: 'Stormy View of the James from Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 22,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_18.png',
        alt: 'James River Park',
        caption: 'Subtle Sunset from Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 23,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_19.png',
        alt: 'James River Park',
        caption: 'Downtown Richmond Skyline at Dusk, View from Suspension Bridge to Belle Isle - Richmond, VA - July 2024',
        id: 24,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_H_20.png',
        alt: 'James River Park',
        caption: 'Belle Isle Rock Pools at Dusk #9 - Richmond, VA - July 2024',
        id: 25,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/LANDSCAPE/JRP-RIC-LANDSCAPE_S_1.png',
        alt: 'James River Park',
        caption: 'Family Enjoying Sun and Rapids on Rocks off Belle Isle - Richmond, VA - July 2024',
        id: 26,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/CP-JULY_1.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 27,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/CP-JULY_2.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 28,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/CP-JULY_3.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 29,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/CP-JULY_4.png',
        alt: 'Colonial Parkway, VA - July 2024',
        caption: 'Colonial Parkway, VA - July 2024',
        id: 30,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/DUSK_1.png',
        alt: 'Sepia Dusk, Central Virginia - July 2024',
        caption: 'Sepia Dusk, Central Virginia - July 2024',
        id: 31,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/KSP-JULY_2.png',
        alt: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        caption: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        id: 32,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/KSP-JULY_3.png',
        alt: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        caption: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        id: 33,
        loading: 'lazy'
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//LANDSCAPE2/KSP-JULY_4.png',
        alt: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        caption: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        id: 34,
        loading: 'lazy'
    }, {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE/CLOUDS_1.png`,
        alt: 'interesting clouds',
        caption: 'Colorful Clouds, Central Virginia - Late July 2024',
        id: 35,
        loading: 'lazy'
    }, {
        src: `${process.env.PUBLIC_URL}/LANDSCAPE/CLOUDS_2.png`,
        alt: 'textured clouds',
        caption: 'Colorful Clouds #2, Central Virginia - Late July 2024',
        id: 36,
        loading: 'lazy'
    } 
];

const LandscapeGallery = () => {
    return (
        <div className="gallery-container">
            <MasonryGrid images={images} />
        </div>
    );
};

export default LandscapeGallery;
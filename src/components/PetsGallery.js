import React from "react";
import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/APOLLO-ATHENA-JULY_1.png',
        alt: 'dogs on shore of chesapeake bay',
        caption: 'Playtime on the Chesapeake Bay, Kiptopeke State Park - Cape Charles, VA (July 2024)',        
        id: 1
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/APOLLO-ATHENA-JULY_2.png',
        alt: 'dogs on shore of chesapeake bay',
        caption: 'Playtime on the Chesapeake Bay, Kiptopeke State Park - Cape Charles, VA (July 2024)',        
        id: 2
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/ATHENA-JULY_1.png',
        alt: 'dog laying in grass',
        caption: 'Athena in the Sun - Central VA (July 2024)',        
        id: 3
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/ATHENA-JULY_2.png',
        alt: 'dog laying in grass from behind',
        caption: 'Athena in the Sun #2 - Central, VA (July 2024)',        
        id: 4
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/ATHENA-JULY_3.png',
        alt: 'dog laying in grass from behind',
        caption: 'Athena in the Sun #3 - Central, VA (July 2024)',        
        id: 5
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/ATHENA-JULY_4.png',
        alt: 'dog sitting in yard',
        caption: 'Waiting and Wanting - Central Virginia (July 2024)',        
        id: 6
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/ATHENA-JULY_5.png',
        alt: 'dog drinking water off plastic bin under sepia skies',
        caption: 'Sepia Skies Après la Tempête - Central VA (July 2024)',        
        id: 7
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/ATHENA-JULY_6.png',
        alt: 'dog on shore of bay',
        caption: 'Athena by the Bay, Kiptopeke State Park - Cape Charles, VA (July 2024)',        
        id: 8
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Apollo_1.png',
        alt: 'dog on rocks at great falls',
        caption: 'Apollo on the Rocks, Great Falls - Shenandoah National Park, VA (June 2024)',        
        id: 9
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Apollo_2.png',
        alt: 'dog wading into watering hole',
        caption: 'Wading Days - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',        
        id: 10
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_1.png',
        alt: 'dog wading in pool at base of waterfall',
        caption: 'Waterfall Wanderings (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',        
        id: 11
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Apollo_3.png',
        alt: 'dog on rocks at great falls',
        caption: 'Apollo on the Rocks #2, Great Falls - Shenandoah National Park, VA (June 2024)',        
        id: 12
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_2.png',
        alt: 'dog wading in pool at base of waterfall (black and white)',
        caption: 'Waterfall Wanderings #2 (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',        
        id: 13
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Apollo_4.png',
        alt: 'dog on rocks at great falls',
        caption: 'Apollo on the Rocks #3, Great Falls - Shenandoah National Park, VA (June 2024)',       
        id: 14
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_3.png',
        alt: 'dog wading in pool at base of waterfall',
        caption: 'Waterfall Wanderings #3 (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',        
        id: 15
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_4.png',
        alt: 'dog wading in pool at base of waterfall',
        caption: 'Waterfall Wanderings #4 (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',        
        id: 16
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Apollo_5.png',
        alt: 'dog wading in pool at base of waterfall',
        caption: 'Waterfall Wanderings #5 (Apollo) - Great Falls, Shenandoah National Park, VA (July 2024)',        
        id: 17
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_5.png',
        alt: 'dog against colorful rock background',
        caption: 'Pondering (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',        
        id: 18
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_6.png',
        alt: 'dog staring up at man with sandwich',
        caption: 'New Friends (Athena) - Great Falls, Shenandoah National Park, VA (July 2024)',        
        id: 19
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_7.png',
        alt: 'dog wading through water',
        caption: 'Watery Walk (Athena) - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',        
        id: 20
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_8.png',
        alt: 'dog looking out over rock',
        caption: 'Lookout (Athena) - Great Falls, Shenandoah National Park Near Sugar Hollow, VA (July 2024)',        
        id: 21
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Apollo_6.png',
        alt: 'dog wading through water',
        caption: 'Watery Walk #2 (Apollo) - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',        
        id: 22
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena_9.png',
        alt: 'dog on rocks',
        caption: 'Athena on the Rocks - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',        
        id: 23
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena-Apollo_1.png',
        alt: 'dogs wading in rocky river',
        caption: 'Rocky River Ramblings - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',        
        id: 24
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS2/SH-Athena-Apollo_2.png',
        alt: 'one dog swimming and the other wading in water',
        caption: 'Summer Swim - Shenandoah National Park Near Sugar Hollow, VA (June 2024)',        
        id: 25
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_1.png',
        alt: 'dogs',
        caption: 'Athena on Boulder - James River Park, Richmond, VA - July 2024',
        id: 26
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_2.png',
        alt: 'dogs',
        caption: 'Athena Explores Rock Pools, James River Park, Richmond, VA - July 2024',
        id: 27
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_3.png',
        alt: 'dogs',
        caption: 'Waiting on the Path, James River Park, Richmond, VA - July 2024',
        id: 28
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_4.png',
        alt: 'dogs',
        caption: 'Running Across the Bridge, James River Park, Richmond, VA - July 2024',
        id: 29
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_5.png',
        alt: 'dogs',
        caption: 'Looking Over Bridge, James River Park, Richmond, VA - July 2024',
        id: 30
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_6.png',
        alt: 'dogs',
        caption: 'Out on the Rock, Belle Isle, Richmond, VA - July 2024',
        id: 31
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_7.png',
        alt: 'dogs',
        caption: 'Out on the Rock #2, Belle Isle, Richmond, VA - July 2024',
        id: 32
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_8.png',
        alt: 'dogs',
        caption: 'Curious Ruins, Belle Isle, Richmond, VA - July 2024',
        id: 33
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_9.png',
        alt: 'dogs',
        caption: 'Rocky Exploration, James River Park, Richmond, VA - July 2024',
        id: 34
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_10.png',
        alt: 'dogs',
        caption: 'Driftwood Inspector, James River Park, Richmond, VA - July 2024',
        id: 35
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_11.png',
        alt: 'dogs',
        caption: 'Out on the Rock #3, Belle Isle, Richmond, VA - July 2024',
        id: 36
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_H_12.png',
        alt: 'dogs',
        caption: 'Out on the Rock #3 (Black and White), Belle Isle, Richmond, VA - July 2024',
        id: 37
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/PETS/JRP-RIC-PETS_S_1.png',
        alt: 'dogs',
        caption: 'Out on the Rock #4, Belle Isle, Richmond, VA - July 2024',
        id: 38
    }
]

const PetsGallery = () => {
    return (
        <div className="gallery-container">
            <MasonryGrid images={images} />
        </div>
    );
};

export default PetsGallery;
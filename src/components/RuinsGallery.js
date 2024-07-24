import React from "react";
import MasonryGrid from "./MasonryGrid";

const images = [
    {
       src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_1.png',
       alt: 'Abandoned Hyro Plant, view from James River Rock Pools, James River Park, Richmond, VA - July 2024',
       caption: 'Abandoned Hyro Plant, view from James River Rock Pools, James River Park, Richmond, VA - July 2024',
       id:  1
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_2.png',
        alt: 'Abandoned Hyro Plant, view from James River Rock Pools, James River Park, Richmond, VA - July 2024',
        caption: 'Abandoned Hyro Plant, view from James River Rock Pools #2, James River Park, Richmond, VA - July 2024',
        id:  2
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_3.png',
        alt: 'abandoned structure',
        caption: 'Abandoned House-Like Structure, Belle Isle, Richmond, VA - July 2024',
        id:  3
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_4.png',
        alt: 'abandoned structure',
        caption: 'Abandoned House-Like Structure #2, Belle Isle, Richmond, VA - July 2024',
        id:  4
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_5.png',
        alt: 'abandoned hydroplant',
        caption: 'Water Droplets Spray Through Exposed Window into Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  5
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_6.png',
        alt: 'let love bloom graffiti',
        caption: '"Let Love Bloom", Graffiti on Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  6
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_7.png',
        alt: 'structure near abandoned hyrdo plant',
        caption: 'Abandoned Structure Adjacent to Abandoned Hyro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  7
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_8.png',
        alt: 'abandoned hyro plant',
        caption: 'Side Facade of Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  8
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_9.png',
        alt: 'youth spraying graffiti inside abandoned hydro plant',
        caption: 'Incognito Graffiti Artist - Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  9
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_10.png',
        alt: 'graffiti on abandoned structure near hydro plant',
        caption: 'Gregarious Graffiti, Abandoned Structure Adjacent to Abandoned Hyro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  10
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_11.png',
        alt: 'graffiti on abandoned hydro plant',
        caption: 'Gregarious Graffiti #2, Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  11
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_12.png',
        alt: 'dogs running toward abandoned hydro plant',
        caption: 'Gregarious Graffiti #3, Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  12
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_13.png',
        alt: 'abandoned hyro plant from distance',
        caption: 'Abandoned Hyro Plant, view from Pedestrian Bridge, James River Park, Richmond, VA - July 2024',
        id:  13
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_14.png',
        alt: '"Free Palestine" graffiti on pedestrian bridge',
        caption: 'Modern Demands, Pedestrian Bridge to Belle Isle, Richmond, VA - July 2024',
        id:  14
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_H_15.png',
        alt: 'abandoned hydro plant',
        caption: 'Abandoned Hyro Plant, view from Pedestrian Bridge, James River Park, Richmond, VA - July 2024',
        id:  15
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_S_1.png',
        alt: 'graffiti on abandoned hydro plant',
        caption: 'Gregarious Graffiti #4, Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  16
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_V_1.png',
        alt: 'graffiti on door of abandoned hydro plant',
        caption: 'Gregarious Graffiti #5, Abandoned Hydro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  17
     }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/RUINS/JRP-RIC-RUINS_V_2.png',
        alt: 'structure near abandoned hydro plant',
        caption: 'Abandoned Structure Adjacent to Abandoned Hyro Plant, Belle Isle, Richmond, VA - July 2024',
        id:  18
     },
]

const RuinsGallery = () => {
    return (
        <div className="gallery">
            <MasonryGrid images={images} />
        </div>
    );
};

export default RuinsGallery;
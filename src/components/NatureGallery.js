import React from "react";
import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_1.png',
        alt: 'Cardinal in Flight, Central Virginia - July 2024',
        caption: 'Cardinal in Flight, Central Virginia - July 2024',
        loading: 'lazy',
        id: 1
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_2.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 2
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_3.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 3
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_3_BW.png',
        alt: 'Songbird on Feeder (Black & White), Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 4
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_5.png',
        alt: 'Female Cardinal on Feeder, Central Virginia - July 2024',
        caption: 'Female Cardinal on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 5
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_6.png',
        alt: 'Bird in Flight, Central Virginia - July 2024',
        caption: 'Bird in Flight, Central Virginia - July 2024',
        loading: 'lazy',
        id: 6
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_7.png',
        alt: 'Yellow Breasted Wren on Branch, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Branch, Central Virginia - July 2024',
        loading: 'lazy',
        id: 7
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_8.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 8
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_10.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 10
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_11.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 11
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_12.png',
        alt: 'Songbird with Seed on Feeder, Central Virginia - July 2024',
        caption: 'Songbird with Seed on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 12
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_13.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Songbird on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 13
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_14.png',
        alt: 'Songbird Silhouette, Central Virginia - July 2024',
        caption: 'Songbird Silhouette, Central Virginia - July 2024',
        loading: 'lazy',
        id: 14
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_15.png',
        alt: 'Shadowy Songbird, Central Virginia - July 2024',
        caption: 'Shadowy Songbird, Central Virginia - July 2024',
        loading: 'lazy',
        id: 15
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_16.png',
        alt: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        caption: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        loading: 'lazy',
        id: 16
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_17.png',
        alt: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        caption: 'Lady Cardinal in Bush, Central Virginia - July 2024',
        loading: 'lazy',
        id: 17
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_18.png',
        alt: 'Cardinal on Feeder, Central Virginia - July 2024',
        caption: 'Cardinal on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 18
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_19.png',
        alt: 'Cardinal on Feeder, Central Virginia - July 2024',
        caption: 'Cardinal on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 19
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_20.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 20
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_21.png',
        alt: 'Songbird on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 21
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_22.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 22
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_23.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 23
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_25.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 25
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_22.png',
        alt: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        caption: 'Yellow Breasted Wren on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 22
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_26.png',
        alt: 'Cardinal on Tree, Central Virginia - July 2024',
        caption: 'Cardinal on Tree, Central Virginia - July 2024',
        loading: 'lazy',
        id: 26
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_27.png',
        alt: 'bird on power line after storm - July 2024',
        caption: 'Bird on Powerline Against Stormy Sky, Central Virginia - July 2024',
        loading: 'lazy',
        id: 27
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BIRD_28.png',
        alt: 'bird with catch in beak, Central Virginia - July 2024',
        caption: 'Hunting Bird, Central Virginia - July 2024',
        loading: 'lazy',
        id: 28
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/BLACK-EYED-SUSANS.png',
        alt: 'Black Eyed Susans, Central Virginia - July 2024',
        caption: 'Black Eyed Susans, Central Virginia - July 2024',
        loading: 'lazy',
        id: 29
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/COLORFUL-CLOUDS_1.png',
        alt: 'Saturated Storm Clouds, Central Virginia - July 2024',
        caption: 'Saturated Storm Clouds, Central Virginia - July 2024',
        loading: 'lazy',
        id: 30
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/COLORFUL-CLOUDS_2.png',
        alt: 'Saturated Storm Clouds, Central Virginia - July 2024',
        caption: 'Saturated Storm Clouds, Central Virginia - July 2024',
        loading: 'lazy',
        id: 31
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/COLORFUL-CLOUDS_3.png',
        alt: 'Saturated Storm Clouds, Central Virginia - July 2024',
        caption: 'Saturated Storm Clouds, Central Virginia - July 2024',
        loading: 'lazy',
        id: 32
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/KSP-JULY_1.png',
        alt: 'Dignified Driftwood, Kiptopeke State Park, Cape Charles, Virginia - July 2024',
        caption: 'Dignified Driftwood, Kiptopeke State Park, Cape Charles, Virginia - July 2024',
        loading: 'lazy',
        id: 33
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_1.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 34
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_2.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 35
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_3.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 36
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_4.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 37
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_5.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 38
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_6.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 39
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_7.png',
        alt: 'Moormans River,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Moormans River,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 40
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_8.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 41
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_11.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 42
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_12.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 43
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_13.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 44
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_14.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 45
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_15.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 46
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_16.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 47
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_17.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 48
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/SH_18.png',
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 49
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public//NATURE2/STORM-HUE.png',
        alt: 'Sepia Storm Dusk, Central Virginia - July 2024',
        caption: 'Sepia Storm Dusk, Central Virginia - July 2024',
        loading: 'lazy',
        id: 50
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_30.png',
        alt: 'songbird',
        caption: 'Cardinal in Flight #3, Central Virginia - July 2024',
        loading: 'lazy',
        id: 51
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_32.png',
        alt: 'songbird',
        caption: 'Cardinal in the Grass, Central Virginia - July 2024',
        loading: 'lazy',
        id: 52
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_33.png',
        alt: 'songbird',
        caption: 'Cardinal in the Grass #2, Central Virginia - July 2024',
        loading: 'lazy',
        id: 53
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_34.png',
        alt: 'songbird',
        caption: 'Songbird Perched on Bush, Central Virginia - July 2024',
        loading: 'lazy',
        id: 54
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_35.png',
        alt: 'songbird',
        caption: 'Songbird in Flight, Central Virginia - July 2024',
        loading: 'lazy',
        id: 55
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_36.png',
        alt: 'songbird',
        caption: 'Songbird in Flight #2, Central Virginia - July 2024',
        loading: 'lazy',
        id: 56
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_37.png',
        alt: 'songbird',
        caption: 'Diving Cardinal, Central Virginia - July 2024',
        loading: 'lazy',
        id: 57
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_H_29.png',
        alt: 'songbird',
        caption: 'Bird on Planter, Central Virginia - July 2024',
        loading: 'lazy',
        id: 58
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_H_31.png',
        alt: 'songbird',
        caption: 'Cardinal in Bush #3, Central Virginia - July 2024',
        loading: 'lazy',
        id: 59
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/BIRD_H_38.png',
        alt: 'songbird',
        caption: 'Blue Bird Perched on Handicap Sign, Central Virginia - July 2024',
        loading: 'lazy',
        id: 60
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_1.png',
        alt: 'flower growing between rocks',
        caption: 'Rock Pond Bloom, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 61
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_2.png',
        alt: 'flower growing between rocks',
        caption: 'Rock Pond Bloom #2, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 62
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_3.png',
        alt: 'curled leaves',
        caption: 'Curled Leaf, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 63
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_4.png',
        alt: 'Red Flowers',
        caption: 'Red Flowers, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 64
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_5.png',
        alt: 'trickling water',
        caption: 'Trickling Water, James River Park, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 65
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_6.png',
        alt: 'wildflower',
        caption: 'Bright Wildflower, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 66
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_7.png',
        alt: 'goose on rock',
        caption: 'Goose Guard, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 67
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_8.png',
        alt: 'duck on rock',
        caption: 'Duck Diligence, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 68
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_9.png',
        alt: 'geese',
        caption: 'Group Gander, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 69
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_10.png',
        alt: 'puffed up goose',
        caption: 'Puffed, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 70
    }, {
        src: 'https://raw.githubusercontent.com/bellamoss77/masonry-gallery-test/main/public/NATURE/JRP-RIC-NATURE_H_11.png',
        alt: 'water pools around rocks in Rock Pools',
        caption: 'Rocks and Reflections, Belle Isle, Richmond, VA - July 2024',
        loading: 'lazy',
        id: 71
    }
]

const NatureGallery = () => {
    return (
        <div className="gallery-container">
            <MasonryGrid images={images} />
        </div>
    );
};

export default NatureGallery;
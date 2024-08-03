import React from 'react';
import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_1.png`,
        alt: 'tufted titmouse approaches feeder',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 1
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_2.png`,
        alt: 'tufted titmouse on feeder',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 2
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_3.png`,
        alt: 'diving cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 3
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_4_BW.png`,
        alt: 'barbed warbler flying away from planter pot',
        caption: 'Barbed Warbler (Black & White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 4
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_4.png`,
        alt: 'barbed warbler flying away from planter pot',
        caption: 'Barbed Warbler - Central Virginia - July 2024',
        loading: 'lazy',
        id: 5
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_5.png`,
        alt: 'hummingbird',
        caption: 'Hummingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 6
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_6.png`,
        alt: 'hummingbird',
        caption: 'Hummingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 7
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_7.png`,
        alt: 'chipping sparrow',
        caption: 'Chipping Sparrow - Central Virginia - July 2024',
        loading: 'lazy',
        id: 8
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_8.png`,
        alt: 'american robin',
        caption: 'American Robin - Central Virginia - July 2024',
        loading: 'lazy',
        id: 9
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_9.png`,
        alt: 'american robin',
        caption: 'American Robin - Central Virginia - July 2024',
        loading: 'lazy',
        id: 10
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_10.png`,
        alt: 'american robin',
        caption: 'American Robin - Central Virginia - July 2024',
        loading: 'lazy',
        id: 11
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_11_BW.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 12
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_11.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmoouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 13
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_12.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 14
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_13.png`,
        alt: 'barbed warbler',
        caption: 'Barbed Warbler - Central Virginia - July 2024',
        loading: 'lazy',
        id: 15
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_14_BW.png`,
        alt: 'house finch',
        caption: 'House Finch (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 16
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_14.png`,
        alt: 'house finch',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 17
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_15.png`,
        alt: 'house finch',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 18
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_16_BW.png`,
        alt: 'house finch',
        caption: 'House Finch (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 19
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_16.png`,
        alt: 'house finch',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 20
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_17_BW.png`,
        alt: 'house finch',
        caption: 'House Finch (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 21
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_17.png`,
        alt: 'house finch',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 22
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_18.png`,
        alt: 'house finch',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 23
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_19.png`,
        alt: 'Northern Mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 24
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_20_BW.png`,
        alt: 'Northern Mockingbird',
        caption: 'Northern Mockingbird (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 25
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_20.png`,
        alt: 'Northern Mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 26
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_21.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 27
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_23.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 28
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_24.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 29
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_25.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 30
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_26.png`,
        alt: 'Northern Cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 31
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_27.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 32
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_28.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 33
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_29.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 34
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_30_BW.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 35
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_30.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 36
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_31.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 37
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_32.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 38
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_33_BW.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 39
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_33.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 40
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_34.png`,
        alt: 'northern cardinals',
        caption: 'Northern Cardinals - Central Virginia - July 2024',
        loading: 'lazy',
        id: 41
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_35_BW.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 42
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_35.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 43
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_36.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 44
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_37.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 45
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_38.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 46
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_39.png`,
        alt: 'unknown songbird',
        caption: 'Unidentified Songbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 47
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_40.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 48
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_42.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 49
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_43.png`,
        alt: 'mourning dove',
        caption: 'Mourning Dove - Central Virginia - July 2024',
        loading: 'lazy',
        id: 50
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_44_BW.png`,
        alt: 'house finch',
        caption: 'House Finch (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 51
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_44.png`,
        alt: 'house finch',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 52
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_45.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 53
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_46.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 54
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_48_BW.png`,
        alt: 'tufted titmouse in flight',
        caption: 'Tufted Titmouse (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 55
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_48.png`,
        alt: 'tufted titmouse in flight',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 56
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_49.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 57
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_50.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 58
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_51.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 59
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_51_BW.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 60
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_52.png`,
        alt: 'northern mockingbird',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 61
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_53.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 62
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_54.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 63
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_56.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 64
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_58_BW.png`,
        alt: 'house finch',
        caption: 'House Finch (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 65
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_58.png`,
        alt: 'house finch',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 66
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_59.png`,
        alt: 'house finch and northern cardinal',
        caption: 'House Finch and Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 67
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_60.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 68
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_61.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 69
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_62.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 70
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_63.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 71
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_64.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 72
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_65.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 73
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_66.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 74
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_67.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 75
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_68.png`,
        alt: 'black-capped chickadee',
        caption: 'Black-Capped Chickadee - Central Virginia - July 2024',
        loading: 'lazy',
        id: 76
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_69.png`,
        alt: 'black-capped chickadee',
        caption: 'Black-Capped Chickadee - Central Virginia - July 2024',
        loading: 'lazy',
        id: 77
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_70.png`,
        alt: 'black-capped chickadee',
        caption: 'Black-Capped Chickadee - Central Virginia - July 2024',
        loading: 'lazy',
        id: 78
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_71.png`,
        alt: 'northern cardinal and house finch',
        caption: 'Northern Cardinal and House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 79
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_72.png`,
        alt: 'northern cardinal and house finch',
        caption: 'Northern Cardinal and House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 80
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_73.png`,
        alt: 'mourning dove',
        caption: 'Mourning Dove - Central Virginia - July 2024',
        loading: 'lazy',
        id: 81
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_74.png`,
        alt: 'mourning dove',
        caption: 'Mourning Dove - Central Virginia - July 2024',
        loading: 'lazy',
        id: 82
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_75.png`,
        alt: 'sparrow',
        caption: 'Sparrow - Central Virginia - July 2024',
        loading: 'lazy',
        id: 83
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_76.png`,
        alt: 'house finch and northern cardinal',
        caption: 'House Finch and Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 84
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_77.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 85
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_78.png`,
        alt: 'northern cardinals',
        caption: 'Northern Cardinals - Central Virginia - July 2024',
        loading: 'lazy',
        id: 86
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_79.png`,
        alt: 'northern cardinal and black-capped chickadee',
        caption: 'Northern Cardinal and Black-Capped Chickadee - Central Virginia - July 2024',
        loading: 'lazy',
        id: 87
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_81.png`,
        alt: 'northern cardinal and tufted titmouse',
        caption: 'Northern Cardinal and Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 88
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_80.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 89
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_82_BW.png`,
        alt: 'northern cardinal and tufted titmouse',
        caption: 'Northern Cardinal and Tufted Titmouse (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 90
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_82.png`,
        alt: 'northern cardinal and tufted titmouse',
        caption: 'Northern Cardinal and Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 91
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_83.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 92
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_84.png`,
        alt: 'northern cardinals',
        caption: 'Northern Cardinals - Central Virginia - July 2024',
        loading: 'lazy',
        id: 93
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_85.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 94
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_86_BW.png`,
        alt: 'Northern cardinal',
        caption: 'Northern Cardinal (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 95
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_86.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 96
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_87.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 97
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_88_BW.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 98
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_88.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 99
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_89.png`,
        alt: 'northern cardinals',
        caption: 'Northern Cardinals - Central Virginia - July 2024',
        loading: 'lazy',
        id: 100
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_90.png`,
        alt: 'northern cardinal and tufted titmouse',
        caption: 'Northern Cardinal and Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 101
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_92.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 102
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_95.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 103
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_96_BW.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 104
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_97.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 105
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_98.png`,
        alt: 'tufted titmouse',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 106
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_99.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 107
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_100.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 108
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_101.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 109
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_102.png`,
        alt: 'black-capped chickadee',
        caption: 'Black-Capped Chickadee - Central Virginia - August 2024',
        loading: 'lazy',
        id: 110
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_103.png`,
        alt: 'northern cardinal, house finch, chipping sparrow',
        caption: 'Northern Cardinal, House Finch and Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 111
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_104.png`,
        alt: 'northern cardinal, house finch, chipping sparrow',
        caption: 'Northern Cardinal, House Finch and Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 112
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_106.png`,
        alt: 'northern cardinal, tufted titmouse, house finch',
        caption: 'Northern Cardinal, Tufted Titmouse and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 113
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_105.png`,
        alt: 'northern cardinal, chipping sparrow and house finch',
        caption: 'Northern Cardinal, Chipping Sparrow and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 114
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_107.png`,
        alt: 'tufted titmouse, chipping sparrow and house finch',
        caption: 'Tufted Titmouse, Chipping Sparrow and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 115
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_108.png`,
        alt: 'tufted titmouse, chipipng sparrow and house finches',
        caption: 'Tufted Titmouse, Chipping Sparrow and Two House Finches - Central Virginia - August 2024',
        loading: 'lazy',
        id: 116
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_109.png`,
        alt: 'tufted titmouse, chipping sparrow and house finch',
        caption: 'Tufted Titmouse, Chipping Sparrow and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 117
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_110.png`,
        alt: 'two house finches and a chipping sparrow',
        caption: 'Two House Finches and a Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 118
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_111.png`,
        alt: 'two house finches and a chipping sparrow',
        caption: 'Two House Finches and a Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 119
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_112.png`,
        alt: 'two house finches and a chipping sparrow',
        caption: 'Two House Finches and a Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 120
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_113.png`,
        alt: 'two house finches and a chipping sparrow',
        caption: 'Two House Finches and a Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 121
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_114.png`,
        alt: 'Two chipping sparrows and a house finch',
        caption: 'Two Chipping Sparrows and a House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 122
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_115.png`,
        alt: 'two chipping sparrows and a house finch',
        caption: 'Two Chippig Sparrows and a House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 123
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_116.png`,
        alt: 'house finch and chipping sparrow',
        caption: 'Chipping Sparrow and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 124
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_117.png`,
        alt: 'chipping sparrows',
        caption: 'Chipping Sparrows - Central Virginia - August 2024',
        loading: 'lazy',
        id: 125
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_118.png`,
        alt: 'northern cardinal and house finch',
        caption: 'Northern Cardinal and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 126
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_119.png`,
        alt: 'tufted titmouse and northern cardinal',
        caption: 'Tufted Titmouse and Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 127
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_120.png`,
        alt: 'tufted titmouse and northern cardinal',
        caption: 'Tufted Titmouse and Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 128
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_121.png`,
        alt: 'northern cardinal',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 129
    }, {
        src: `${process.env.PUBLIC_URL}/BIRDS/SONGBIRD_122.png`,
        alt: 'northern cardinal and black-capped chickadee',
        caption: 'Northern Cardinal and Black-Capped Chickadee - Central Virginia - August 2024',
        loading: 'lazy',
        id: 130
    }
];

const BirdsGallery = () => {
    return (
        <div className='gallery-container'>
            <MasonryGrid images={images} />
        </div>
    );
};

export default BirdsGallery;


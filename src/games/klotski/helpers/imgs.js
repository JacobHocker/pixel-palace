import FrodoSam from '../assets/imgs/frodosamsquare.jpeg';
import Harry from '../assets/imgs/harrysquare.jpeg';
import Hogwarts from '../assets/imgs/hogwartssquare.jpeg';
import DarthLuke from '../assets/imgs/lukedarthsquare.jpeg';
import Smiley from '../assets/imgs/smileySquare.png';
import Squirtle from '../assets/imgs/squirtle.png';
import Starwars from '../assets/imgs/starwarssquare.jpg';

export const ImgBank = [
    {
        id: 0,
        value: FrodoSam,
    },
    {
        id: 1,
        value: Harry,
    },
    {
        id: 2,
        value: Hogwarts,
    },
    {
        id: 3,
        value: DarthLuke,
    },
    {
        id: 4,
        value: Smiley,
    },
    {
        id: 5,
        value: Squirtle,
    },
    {
        id: 6,
        value: Starwars,
    },
];

export const randomImg = () => {
    
    const randImgIndex = ImgBank[Math.floor(Math.random() * ImgBank.length)]
    const randImg = randImgIndex.value
    return randImg
}
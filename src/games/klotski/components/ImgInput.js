import React, {  useContext, useEffect } from 'react';
import { KlotskiContext } from '../Klotski';
import { updateUrlParams } from '../helpers/helpers';
import '../styles/ImgInput.css';
import { randomImg } from '../helpers/imgs';

const ImgInput = () => {
    const { img, setImg, shuffleTiles, setIsStarted, setMoves } = useContext(KlotskiContext);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        if (urlParams.has("img")) {
            setImg(urlParams.get("img"))
        }
    }, [])

    const handleImgChange = (e) => {
        setImg(e.target.value)
        window.history.replaceState("", "", updateUrlParams(window.location.href, "img", img))
    };
    
    const handleRandomImageClick = () => {
        setImg(randomImg());
        shuffleTiles();
        setMoves(0);
        setIsStarted(true);
    };

    return (
        <div className='klotskiImgInput'>
            <button onClick={handleRandomImageClick}>
                Random Image
            </button>
            <label>Copy & Paste Sqaure Image Link </label>
            <input 
            value={img} 
            onChange={handleImgChange} 
            className='klotskiInput'
            />
            
        </div>
    )
}

export default ImgInput
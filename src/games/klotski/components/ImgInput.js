import React, {  useState, useContext, useEffect } from 'react';
import { KlotskiContext } from '../Klotski';
import { updateUrlParams } from '../helpers/helpers';
import '../styles/ImgInput.css';
import { randomImg } from '../helpers/imgs';

const ImgInput = () => {
    const { img, setImg, shuffleTiles, setIsStarted, setMoves } = useContext(KlotskiContext);
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        if (urlParams.has("img")) {
            setImg(urlParams.get("img"))
        }
    }, [])

    const handleImgChange = (e) => {
        setImg(e.target.value);
        
        window.history.replaceState("", "", updateUrlParams(window.location.href, "img", img));
        
    };
    
    const handleRandomImageClick = () => {
        setImg(randomImg());
        shuffleTiles();
        setMoves(0);
        setIsStarted(true);
    };

    return (
        <div className='klotskiInputSection'>

            { !showInput ?
            <div className='klotskiInputBtnContainer'>
                <button onClick={handleRandomImageClick} className='klotskiRndImg'>
                    <span>
                        Random 
                    </span>
                    <span>
                        Image
                    </span>
                </button>
                <button onClick={() => setShowInput(true)} className='klotskiCustImg'>
                    <span>
                        Custom 
                    </span>
                    <span>
                        Image
                    </span>
                </button>
            </div>
            :
            <div className='klotskiCustomInput'>
                <label>Copy & Paste Sqaure Image Link </label>
                <div className='klotskiInputContainer'>
                    <input 
                    value={img} 
                    onChange={handleImgChange} 
                    className='klotskiInput'
                    />
                    <button onClick={() => {setShowInput(false)}}
                    className='klotskiCloseImg'
                    >
                        X
                    </button>
                </div>
                
            </div>
            
            }
            
        </div>
    )
}

export default ImgInput
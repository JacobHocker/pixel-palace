import React, {  useContext, useEffect } from 'react';
import { KlotskiContext } from '../Klotski';
import { updateUrlParams } from '../helpers/helpers';
import '../styles/ImgInput.css';

const ImgInput = () => {
    const { img, setImg } = useContext(KlotskiContext);

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
    

    return (
        <div className='klotskiImgInput'>
            <input 
            value={img} 
            onChange={handleImgChange} 
            className='klotskiInput'
            />
        </div>
    )
}

export default ImgInput
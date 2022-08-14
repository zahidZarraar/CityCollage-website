import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';


const options = {
    damping:0.07,
}

const SmoothScroll = () => {

    useEffect(() => {
        Scrollbar.init(document.body, options);
    }, [])
    

  return null;
}

export default SmoothScroll
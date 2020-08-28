import React from 'react'
import lazysizes from 'lazysizes';

import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

export default function Img({ imgPath, imgClass, imgAlt }) {


    return (
        <img src={imgPath} style={{ objectFit: "cover" }} className={`${imgClass} lazyload`} alt={imgAlt}>
        </img>
    )


}

import React from 'react'

import './showcase.css'

export default function Showcase() {

    var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

    return (
        <div className="display">
            <div><h3>20 Results</h3></div>
            <div className="showcaseList">
                {list.map(item=>
                    (
                        <div className="showcaseItem">
                            <div className="showcaseZoom"></div>
                            <div className="showcaseImage">Image</div>
                            <div className="showcaseTopNote">New</div>
                            <div className="showcaseTitle"><span>Male Jeans</span></div>
                            <div className="showcasePrice"><span>$29.95</span></div>
                            <div className="showcaseColours"><small>3 COLOURS</small></div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

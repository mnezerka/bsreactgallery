import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';

ReactDOM.render(
    <Gallery
        enableImageSelection={false}
        images={window.BSGALLERYIMAGES}
    />,
    document.getElementById(window.BSGALLERYNODEID)
);

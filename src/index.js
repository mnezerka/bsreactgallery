import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';

if (window.BSPOSTGALLERY)
{
    for (let index = 0; index < window.BSPOSTGALLERY.length; ++index)
    {
        let gallery = window.BSPOSTGALLERY[index];

        ReactDOM.render(
            <Gallery
                enableImageSelection={false}
                images={gallery.images}
            />,
            document.getElementById(gallery.node)
        );
    }
}

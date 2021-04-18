import React from 'react';
import Gallery1 from '../../../../assets/gallery_1.jpg';
import Gallery2 from '../../../../assets/gallery_2.jpg';
import Gallery3 from '../../../../assets/gallery_3.jpg';
import Gallery4 from '../../../../assets/gallery_4.jpg';
import Gallery5 from '../../../../assets/gallery_5.jpg';
import Gallery6 from '../../../../assets/gallery_6.jpg';
import GalleryDetails from '../GalleryDetails/GalleryDetails';

const Gallery = () => {
    const galleryData = [
        {
            img: Gallery1
        },
        {
            img: Gallery2
        },
        {
            img: Gallery3
        },
        {
            img: Gallery4
        },  
        {
            img: Gallery5
        },
        {
            img: Gallery6
        }
    ]

    return (
          <div className="d-flex justify-content-center">
            <div className="w-75 row text-center">
                <h2 className="mb-5" style={{color: '#000'}}>GALLERY</h2>
                {
                    galleryData.map(gallery => <GalleryDetails gallery={gallery} key={gallery.name}></GalleryDetails>)
                }
            </div>
        </div>
    );
};

export default Gallery;
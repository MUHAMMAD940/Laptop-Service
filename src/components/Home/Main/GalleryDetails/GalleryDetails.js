import React from 'react';

const GalleryDetails = ({gallery}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-4" src={gallery.img} alt="" />
        </div>
    );
};

export default GalleryDetails;
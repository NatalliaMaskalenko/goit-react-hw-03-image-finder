import PropTypes from 'prop-types';

export default function ImageGalleryItem({ getPhotoUrl, photo, alt, photoLage }) {
    return (
        <li className="ImageGalleryItem">
            <img onClick = {()=>getPhotoUrl(photoLage, alt)} src={photo} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    photo: PropTypes.string,
    alt: PropTypes.string,
};
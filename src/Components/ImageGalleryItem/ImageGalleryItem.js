import PropTypes from 'prop-types';

export default function ImageGalleryItem({ photo, alt }) {
    return (
        <li className="ImageGalleryItem">
            <img src={photo} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    photo: PropTypes.string,
    alt: PropTypes.string,
};
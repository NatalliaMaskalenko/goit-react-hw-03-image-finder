export default function ImageGalleryItem({  photo, alt }) {
    return (
        <li className="ImageGalleryItem">
            <img src={photo} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

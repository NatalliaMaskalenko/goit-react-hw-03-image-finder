export default function ImageGalleryItem({ key, photo, alt }) {
    return (
        <li key={key} className="ImageGalleryItem">
            <img src={photo} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

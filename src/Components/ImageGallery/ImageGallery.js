import { Component } from 'react';
import PixabayFetchObj from '../../services/pixabay';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
    state = {
        gallery: [],
        status: 'init',
    }
    
    newPixabayFetchObj = new PixabayFetchObj();
 
    componentDidUpdate(prevProps, prevState) {
        // if (prevState.gallery !== this.state.gallery) {
        //     localStorage.setItem('photo', JSON.stringify(this.state.gallery));            
        // }

        if (prevProps.name !== this.props.name) {
            this.setState({status:'pending'})
            this.newPixabayFetchObj.name = this.props.name;
            this.newPixabayFetchObj.searchPhotos().then(r => {
                this.setState({
                    gallery: r,
                })
            });
        }
    }

    render() {
        if (this.state.status === 'init') {
           return(<h1>Hello! Search something....</h1>) 
        }

        return (
            <>
                <ul className="ImageGallery">
                    {this.state.gallery.length > 0 && this.state.gallery.map(galleryItem => (<ImageGalleryItem
                    key={galleryItem.id}
                    photo={galleryItem.webformatURL}
                    alt={galleryItem.tags}
                />))}
                </ul>
                <button type="button">More</button>
            </>
        )
    }
    }

 
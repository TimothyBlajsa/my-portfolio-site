import '../Gallery/Gallery.css';
import { IMAGES } from '../../portfolio';
import { newImages } from '../../portfolio';
import ImageGallery from 'react-grid-gallery';
import DztImageGalleryComponent from 'reactjs-image-gallery';

let data;
//<DztImageGalleryComponent images={IMAGES} data-gal={data} />
//document.querySelector('.ReactGridGallery_tile').style.background = 'none';
const Gallery = () => (
    <>
    <section id='gallery' className='section gallery'>
    <h2 className='section__title'>Gallery</h2>
        <div className='gallery_container'>
        <DztImageGalleryComponent images={IMAGES} data-gal={data} />
        </div>
    </section>
    </>
    
)

export default Gallery;
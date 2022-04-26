import '../Gallery/Gallery.css';
import { IMAGES } from '../../portfolio';
import DztImageGalleryComponent from 'reactjs-image-gallery';

let data;

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
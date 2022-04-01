import '../Gallery/Gallery.css';
import { IMAGES } from '../../portfolio';
import DztImageGalleryComponent from 'reactjs-image-gallery';

const Gallery = () => (
    <>
    <h2 className='section__title'>Gallery</h2>
    <section id='gallery' className='section gallery'>
        <DztImageGalleryComponent images={IMAGES} style={{backgroundColor: 'none'}}/>
    </section>
    </>
    
)

export default Gallery;
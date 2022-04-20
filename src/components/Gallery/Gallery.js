import '../Gallery/Gallery.css';
import { IMAGES } from '../../portfolio';
import DztImageGalleryComponent from 'reactjs-image-gallery';

let data;

//console.log(document.getElementsByClassName('styles_wrapper_1kG3C'));
//console.log(document.getElementsByName('figcaption'))
document.getElementsByClassName('styles_wrapper_1kG3C').backgroundColor = 'none';

const Gallery = () => (
    <>
    <h2 className='section__title'>Gallery</h2>
    <section id='gallery' className='section gallery'>
        <DztImageGalleryComponent images={IMAGES} data-gal={data} imageBackgroundColor='white' id='gal-id' background-color='none'/>
    </section>
    </>
    
)

export default Gallery;
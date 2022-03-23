import '../Gallery/Gallery.css';
//import crow from '../../images/crow.jpeg';
import drown from '../../images/drown.jpeg';
import vulture from '../../images/vulture.jpeg';
import scapes from '../..images/scapes.jpeg';

const Gallery = () => (
    <>
    <section id='gallery' className='section gallery'>
        <h2 className='section__title'>Gallery</h2>
        
        <div className='project'>
            <img src={scapes} alt='abstract' className='gallery__image' />
        </div>

        <div className='project'>
            <img src={drown} alt='anime_drawn' className='gallery__image' />
        </div>

        <div className='project'>
            <img src={vulture} alt='prey' className='gallery__image' />
        </div>
    </section>
    </>
    
)

export default Gallery;
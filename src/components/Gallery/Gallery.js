import AwesomeSlider from 'react-awesome-slider';
import '../Gallery/Gallery.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from '../../images/moon.png'

console.log({image});

const Gallery = () => (
    <>
    <section id='gallery' className='section gallery'>
        <h2 className='section__title'>Gallery</h2>
        <div className='project'>
            <img src={image} alt='lunar' className='gallery__image' /> 
        </div>
    </section>
    </>
    
)

export default Gallery;
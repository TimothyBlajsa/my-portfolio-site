import '../Map/Map.css'

const width  = '100%';
const height = '400';
const coords = {
    lat: '40.67139',
    lon: '-74.42997',
}

const Location = () => {
    return (
        <iframe width={width} height={height} src={`https://api.maptiler.com/maps/toner/?key=gfuXlNxZzutozeCvcRzR#10.6/${coords.lat}/${coords.lon}`} title='BH__map'></iframe>
    )
}

export default Location;



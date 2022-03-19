//import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Map, Marker} from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';

const Location = () => {
    return (
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11} provider={stamenToner}>
            <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
    )
}

export default Location;



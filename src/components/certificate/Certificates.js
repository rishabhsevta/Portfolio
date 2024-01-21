import './certificates.css';
import image from './chicmic_training.png';
import constants from '../../constants/constants';
import { Link } from 'react-router-dom';

const Certificates =()=>{


    return(
        <div className="certificate-main">
            <Link to={constants.CHICMIC_CERTIFICATE} target='_blank'><img src={image} className='small-image'/></Link>
            <Link to={constants.CHICMIC_CERTIFICATE} target='_blank'><img src={image} className='small-image'/></Link>
            <Link to={constants.CHICMIC_CERTIFICATE} target='_blank'><img src={image} className='small-image'/></Link>
            <Link to={constants.CHICMIC_CERTIFICATE} target='_blank'><img src={image} className='small-image'/></Link>
        </div>
    )
}

export default Certificates;
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DisplayHCard = ({data}) => {
    const {id,picture,title,category,category_bg,text_button_bg}=data;
    
    return (
        <Link to={`/details/${id}`}>
        <div onClick={(e)=>console.log(id)} className= {`card card-compact  bg-[${category_bg}] shadow-xl`}>
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className=" p-6 space-y-5">

          <span className='px-3 py-2 border-2 rounded-md bg-blue-50 text-lg font-medium   '>{category}</span>
          <h2 className="card-title">{title}</h2>
         
        </div>
      </div>
      </Link>
    );
};

export default DisplayHCard;

DisplayHCard.propTypes = {
    data: PropTypes.object.isRequired
  };